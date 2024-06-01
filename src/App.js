import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoList from './components/VideoList/VideoList';
import Comments from './components/Comments/Comments';
import VideoDetails from './components/VideoDetails/VideoDetails';
import videoListJson from './data/videos.json';
import videoDetailsJson from './data/video-details.json';
import "./App.scss";

function App() {

  const [videoList, setVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  //function to fetch video list
  const fetchVideoList = () => {
    return videoListJson;
  };

  const fetchVideoDetails = (videoId) => {
    const video = videoDetailsJson.find((video) => (video.id === videoId));
    return video;
  };

  //simulating fetching data from APIs
  useEffect(() => {
    const videos = fetchVideoList();
    setVideoList(videos);
  
    if (videos.length > 0) {
      const video = fetchVideoDetails(videos[0].id);
      setCurrentVideo(video);
    }
  }, []);

  const setSelectedVideo = (videoId) => {
    const video = fetchVideoDetails(videoId);
    setCurrentVideo(video);
  }  

  return (
    <div className="App">
      <Header />
      <main className='app__content'>
        {currentVideo && (<VideoPlayer video={currentVideo} />)}
        <div className='app__main'>
          {currentVideo && (
            <>
            <VideoDetails video={currentVideo} />
            <Comments comments={currentVideo.comments} />
            </>
          )}
        </div>
        <div className='app__video-list'>
          <VideoList videos={videoList} onVideoSelect={setSelectedVideo} currentVideoId={currentVideo?.id}/>
        </div>
      </main>
    </div>
  );
}

export default App;
