import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import thumbnailImage from '../../assets/images/Upload-video-preview.jpg';
import publishIcon from '../../assets/images/icons/publish.svg';
import './UploadPage.scss';

function UploadPage(){

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Upload was successful');
        navigate('/');
    };

    const handleCancel = (event) => {
        alert('Upload cancelled');
    };

    return(
        <div className="upload">
            <Header />
            <h1 className="upload__heading">Upload Page</h1>
            <form className="upload__form" onSubmit={handleSubmit}>
                <div className="upload__container">
                    <label htmlFor="thumbnail" className="upload__form-label">VIDEO THUMBNAIL</label>
                    <img 
                        src={thumbnailImage} 
                        className="upload__thumbnail" 
                        alt="racer about to start"
                        id="thumbnail" 
                    />
                </div>
                <div className="upload__container">
                    <label htmlFor="title" className="upload__form-title">TITLE YOUR VIDEO</label>
                    <input
                        type="text"
                        id="title"
                        className="upload__form-input"
                        placeholder="Add a title to your video"
                        value={title}
                        onChange={handleTitleChange}
                        required
                    />

                    <label htmlFor="description" className="upload__form-description">ADD A DESCIRPTION TO YOUR VIDEO</label>
                    <textarea
                        id="description"
                        className="upload__form-textarea"
                        placeholder="Add a description to your video"
                        value={description}
                        onChange={handleDescriptionChange}
                        required
                    />
                </div>
                <div className="upload__container">
                    <button className="upload__publish-button" type="submit">
                        <img src={publishIcon} alt='publish icon' className="upload__publish-icon"/>
                        <span className="upload__text">PUBLISH</span>
                    </button>

                    <Link to="/" className="upload__cancel-button">
                        <button className="upload__cancel-button" type="button" onClick={handleCancel}>
                            <span className="upload__text">CANCEL</span>
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default UploadPage;
