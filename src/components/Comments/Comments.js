import React from 'react';
import './Comments.scss';
import commentIcon from '../../assets/images/icons/add_comment.svg';
import commentAvatar from '../../assets/images/Mohan-muruge.jpg';
import { getDynamicTime } from '../../assets/util/util';


function Comments({comments}){
    return(
        <div className='comments'>
            <h2 className='comments__header'>{comments.length} Comments</h2>
            <div className='comments__form-container'>
                <div className='comments__form-container--avatar'>
                    <img src={commentAvatar} alt='profile avatar' className='comments__profile-avatar' />
                </div>
                <div className='comments__form-container--addComments'>
                    <form className='comments__add-comments'>
                        <label for='comments' className='comments__label'>JOIN THE CONVERSATION</label>
                        <textarea id='comments' name='comments' className='comments__textbox' placeholder='Add a new comment'/>
                    </form>
                    <button className="comments__comment-button">
                        <img src={commentIcon} alt='Comment icon' className="comments__comment-icon"/>
                        <span className="comments__button-text">COMMENT</span>
                    </button>
                </div>
            </div>
            <hr className="comments__divider"></hr>
                
            {comments.map((comment) => (
            <React.Fragment key={comment.id}>
                <div className='comment'>
                    <div className="comment__avatar"></div>
                    <div className='comment__container'>
                        <div className='comment__subcontainer'>
                            <h3 className='comment__name'>{comment.name}</h3>
                            <p className='comment__date'>{getDynamicTime(comment.timestamp)}</p>
                        </div>
                        <p className='comment__comment'>{comment.comment}</p>
                    </div>
                </div>
                <hr className="comments__divider"></hr>
            </React.Fragment>
        ))}
        </div>
    )   
}

export default Comments;
