import React from 'react';
import { Link } from 'react-router-dom';
import './VideoList.scss';

function VideoList({videos, currentVideoId}) {
    if (!videos || videos.length === 0){
        return <div> No videos available</div>
    }
    
    const filteredList = videos.filter(video => video.id !== currentVideoId);

    return (
        <div className="video-list">
            <h2 className="video-list__header">NEXT VIDEOS</h2>
            {filteredList.map((video) => (
                <Link to={`/video/${video.id}`} key={video.id} className="video-list__item">
                    <img className="video-list__image" src={video.image} alt={video.title}/>
                    <div className="video-list__details">
                        <p className="video-list__title">{video.title}</p>
                        <p className="video-list__channel">{video.channel}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default VideoList;