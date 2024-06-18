import React from 'react';
import './VideoList.scss';

function VideoList({videos, onVideoSelect, currentVideoId}) {
    const filteredList = videos.filter(video => video.id !== currentVideoId);

    if (!videos){
        return <div>Loading...</div>;
    }
    return (
        <div className="video-list">
            <h2 className="video-list__header">NEXT VIDEOS</h2>
            {filteredList.map((video) => (
                <div key={video.id} className="video-list__item" onClick={() => onVideoSelect(video.id)}>
                    <img className="video-list__image" src={video.image} alt={video.title}/>
                    <div className="video-list__details">
                        <p className="video-list__title">{video.title}</p>
                        <p className="video-list__channel">{video.channel}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default VideoList;