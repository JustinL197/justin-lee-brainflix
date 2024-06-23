import React from 'react';
import { useState }  from 'react';
import './Comments.scss';
import commentIcon from '../../assets/images/icons/add_comment.svg';
import commentAvatar from '../../assets/images/Mohan-muruge.jpg';
import { getDynamicTime } from '../../assets/util/util';
import { postComment } from '../../assets/util/api';
import { deleteComment } from '../../assets/util/api';
import deleteIcon from '../../assets/images/icons/icon-delete.svg';


function Comments({comments, currentVideoId, onCommentsChange}){

    const [newComment, setNewComment] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleAddComment = async (event) => {
        event.preventDefault();
        setIsSubmitted(true);

        try{
            const commentData = {
                name: 'Justin',
                comment: newComment
            };
            if (newComment){
                await postComment(currentVideoId, commentData);
                setNewComment('');
                onCommentsChange();
                setIsSubmitted(false);
            }
            
        }catch(error){
            console.error('error posting comment', error)
        }
    }

    const handleDeleteComment = async (commentId) => {
        try{
            await deleteComment(currentVideoId, commentId);
            onCommentsChange();
        }catch(error){
            console.log('error deleting comment', error);
        }
    }

    return(
        <div className='comments'>
            <h2 className='comments__header'>{comments.length} Comments</h2>
            <div className='comments__form-container'>
                <div className='comments__form-container__avatar'>
                    <img src={commentAvatar} alt='profile avatar' className='comments__profile-avatar' />
                </div>
                <div className='comments__add-comments-container'>
                    <form className='comments__add-comments' onSubmit={handleAddComment}>
                        <label for='comments' className='comments__label'>JOIN THE CONVERSATION</label>
                        <textarea 
                        id='comments' 
                        name='comments' 
                        className={`comments__textbox ${isSubmitted && !newComment ? 'invalid' : ''}`}
                        placeholder='Add a new comment' 
                        value={newComment} 
                        onChange={event => setNewComment(event.target.value)}
                        />
                        <button className="comments__comment-button" type='submit'>
                            <img src={commentIcon} alt='Comment icon' className="comments__comment-icon"/>
                            <span className="comments__button-text">COMMENT</span>
                        </button>
                    </form>
                    
                </div>
            </div>
            <hr className="comments__divider"></hr>
                
            {[...comments].reverse().map((comment) => (
            <React.Fragment key={comment.id}>
                <div className='comment'>
                    <div className="comment__avatar"></div>
                    <div className='comment__container'>
                        <div className='comment__subcontainer'>
                            <h3 className='comment__name'>{comment.name}</h3>
                            <p className='comment__date'>{getDynamicTime(comment.timestamp)}</p>
                        </div>
                        <p className='comment__comment'>{comment.comment}</p>
                        <div onClick={() => handleDeleteComment(comment.id)} className='comment__delete'>
                            <img src={deleteIcon} alt='delete icon' />
                        </div>
                    </div>
                </div>
                <hr className="comments__divider"></hr>
            </React.Fragment>
        ))}
        </div>
    )   
}

export default Comments;