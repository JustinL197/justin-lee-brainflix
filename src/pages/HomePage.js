import React, {useState, useEffect} from 'react';
import { fetchVideos, fetchVideoById } from '../assets/util/api';
import Header from '../components/Header/Header'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import VideoList from '../components/VideoList/VideoList';
import Comments from '../components/Comments/Comments';
import VideoDetails from '../components/VideoDetails/VideoDetails';

import '../App.scss';

function HomePage() {

  const [videoList, setVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    const getVideos = async () => {
      try{
        const videos = await fetchVideos();
        setVideoList(videos);
        if (videos.length > 0) {
          const video = await fetchVideoById(videos[0].id);
          setCurrentVideo(video);
        }
      } catch(error){
      setError('Failed to load videos');
    }
  };
    getVideos();
  }, []);


    const handleCommentChange = async () => {
      if (currentVideo){
        const updatedVideo = await fetchVideoById(currentVideo.id);
        setCurrentVideo(updatedVideo);
      }
    };

  return (
    <div className="App">
      <Header />
      <main className='app__content'>
        {error && <div>{error}</div>}
        {currentVideo && (<VideoPlayer video={currentVideo} />)}
        <div className='app__main'>
          {currentVideo && (
            <>
            <VideoDetails video={currentVideo} />
            <Comments 
            comments={currentVideo.comments} 
            currentVideoId={currentVideo?.id}
            onCommentsChange={handleCommentChange} />
            </>
          )}
        </div>
        <div className='app__video-list'>
          <VideoList videos={videoList} currentVideoId={currentVideo?.id}/>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
