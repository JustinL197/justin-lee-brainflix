import React from 'react';
import './VideoDetails.scss';
import viewIcon from '../../assets/images/icons/views.svg';
import likeIcon from '../../assets/images/icons/likes.svg';

function VideoDetails ({video}){

    const date = new Date(video.timestamp);
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    return (
        <div className="video-details">
            <h1 className="video-details__title">{video.title}</h1>
            <hr className="video-details__divider video-details__divider--hide"></hr>
            <div className="video-details__container">
                <div className="video-details__subcontainer">
                    <p className="video-details__author">By {video.channel}</p>
                    <p className="video-details__date">{formattedDate}</p>
                </div>
                <div className="video-details__subcontainer">
                    <div className="video-details__views-container">
                        <img src={viewIcon} alt="total views" className='video-details__viewIcon'/>
                        <p className="video-details__views">{video.views}</p>
                    </div>
                    <div className="video-details__likes-container">
                        <img src={likeIcon} alt="total likes" className='video-details__likeIcon'/>
                        <p className="video-details__likes">{video.likes}</p>                             
                    </div>
                </div>
            </div>
            <hr className="video-details__divider"></hr>
            <p className="video-details__description">{video.description}</p>
        </div>
    )
    
}

export default VideoDetails;