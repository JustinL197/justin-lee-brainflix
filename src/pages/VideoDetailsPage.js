import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { fetchVideoById, fetchVideos} from '../assets/util/api';
import Header from '../components/Header/Header';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import Comments from '../components/Comments/Comments';
import VideoDetails from '../components/VideoDetails/VideoDetails';
import VideoList from '../components/VideoList/VideoList';
import '../App.scss';

function VideoDetailsPage(){
    const { id } = useParams();
    const [video, setVideo] = useState(null);
    const [videoList, setVideoList] = useState([]);
    const [error, setError] = useState(null);
   
    useEffect(() => {
        const getVideo = async() => { 
            try {
                const videoData = await fetchVideoById(id);
                setVideo(videoData);
            } catch(error){
                setError('Unable to load video content');
            }
        };

        const getVideoList = async() => {
            try{
                const videos = await fetchVideos();
                setVideoList(videos);
            } catch(error) {
                setError('Unable to load video list');
            }
        };

        getVideo();
        getVideoList();

    }, [id]);

    const handleCommentChange = async () => {
      const updatedVideo = await fetchVideoById(id);
      setVideo(updatedVideo);
    }

    const handleVideoUpdate = (updatedVideo) => {
      setVideo(prevVideo => ({...prevVideo, likes: updatedVideo.likes}));
    };

    return (
        <div className="App">
          <Header />
          <main className='app__content'>
            {error && <div>{error}</div>}
            {video && (<VideoPlayer video={video} />)}
            <div className='app__main'>
              {video && (
                <>
                <VideoDetails video={video} onVideoUpdate={handleVideoUpdate}/>
                <Comments 
                comments={video.comments}
                currentVideoId={video.id}
                onCommentsChange={handleCommentChange} 
                />
                </>
              )}
            </div>
            <div className='app__video-list'>
                <VideoList videos={videoList} currentVideoId={video?.id}/>
            </div>
          </main>
        </div>
      );
};

export default VideoDetailsPage;