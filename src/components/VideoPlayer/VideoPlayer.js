import React from 'react';
import './VideoPlayer.scss';


function VideoPlayer({video}){
    return (
        <div className="video-player">
            <video className="video-player__video" controls poster={video.image}>
                <source src={video.src} type="video/mp4"/>
            </video>
        </div>
    )
}

export default VideoPlayer;