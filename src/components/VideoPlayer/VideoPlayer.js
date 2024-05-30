import React from 'react';
import './VideoPlayer.scss';
import Comments from '../Comments/Comments';
import viewIcon from '../../assets/images/icons/views.svg';
import likeIcon from '../../assets/images/icons/likes.svg';

function VideoPlayer({video}){
    const date = new Date(video.timestamp);
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    return (
        <div className="video-player">
            <video className="video-player__video" controls poster={video.image}>
                <source src={video.src} type="video/mp4"/>
            </video>
            <div className="video-player__details">
                <h1 className="video-player__title">{video.title}</h1>
                <hr className="video-player__divider"></hr>
                <div className="video-player__container">
                    <div className="video-player__subcontainer">
                        <p className="video-player__author">By {video.channel}</p>
                        <p className="video-player__date">{formattedDate}</p>
                    </div>
                    <div className="video-player__subcontainer">
                        <div className="video-player__views-container">
                            <img src={viewIcon} alt="total views" className='video-player__viewIcon'/>
                            <p className="video-player__views">{video.views}</p>
                        </div>
                        <div className="video-player__likes-container">
                            <img src={likeIcon} alt="total likes" className='video-player__likeIcon'/>
                            <p className="video-player__likes">{video.likes}</p>                             
                        </div>
                    </div>
                </div>
                <hr className="video-player__divider"></hr>
                <p className="video-player__description">{video.description}</p>
            </div>

            <Comments comments={video.comments} />
        </div>
    )
}

export default VideoPlayer;