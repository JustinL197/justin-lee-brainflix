import React, {useEffect, useState} from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { fetchVideoById } from '../assets/util/api';
import Header from '../components/Header/Header';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import Comments from '../components/Comments/Comments';
import VideoDetails from '../components/VideoDetails/VideoDetails';
import VideoList from '../components/VideoList/VideoList';
import '../App.scss';

function VideoDetailsPage(){
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const {videoList, video: initialVideo } = location.state || {};
    console.log(videoList);
    const [video, setVideo] = useState(initialVideo || null);
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
        getVideo();
    }, [id, initialVideo]);


    const setSelectedVideo = async (videoId) => {
        try{
            const selectedVideo = await fetchVideoById(videoId);
            setVideo(selectedVideo);
            navigate(`/video/${videoId}`, {state: {videoList, video: selectedVideo}});
        } catch (error){
            setError('Unable to load video content');
        }
    }

    return (
        <div className="App">
          <Header />
          <main className='app__content'>
            {error && <div>{error}</div>}
            {video && (<VideoPlayer video={video} />)}
            <div className='app__main'>
              {video && (
                <>
                <VideoDetails video={video} />
                <Comments comments={video.comments} />
                </>
              )}
            </div>
            <div className='app__video-list'>
                <VideoList videos={videoList} onVideoSelect={setSelectedVideo} currentVideoId={video?.id}/>
            </div>
          </main>
        </div>
      );
};

export default VideoDetailsPage;