import React from 'react';
import './VideoPlayer.scss';

function VideoPlayer({video}){
    return (
        <div className="video-player">
            <video className="video-player__video" controls poster={video.image}>
                <source src={video.src} type="video/mp4"/>
            </video>
            <div className="video-player__details">
                <h1 className="video-player__title">{video.title}</h1>
                <div className="video-player__container">
                    <div className="video-player__subcontainer">
                        <p className="video-player__author">{video.channel}</p>
                        <p className="video-player__date">{video.date}</p>
                    </div>
                    <div className="video-player__subcontainer">
                        <p className="video-player__views">{video.views}</p>
                        <p className="video-player__likes">{video.likes}</p>
                    </div>
                    <p className="video-player__description">{video.description}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer;