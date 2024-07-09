import React from "react";
import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import thumbnailImage from '../../assets/images/Upload-video-preview.jpg';
import publishIcon from '../../assets/images/icons/publish.svg';
import './UploadPage.scss';
import { postVideo } from "../../assets/util/api";

function UploadPage(){

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitted(true);

        const newVideo = {
            title,
            description
        };

        if (title && description) {
            try{
                await postVideo(newVideo)
                navigate('/');
            }catch(error){
                console.log("error posting video");
            }
        }
    };

    const handleCancel = (event) => {
        alert('Upload cancelled');
    };

    return(
        <div className="upload">
            <Header />
            <h1 className="upload__heading">Upload Video</h1>
            <hr className="upload__divider"></hr>
            <form className="upload__form" onSubmit={handleSubmit}>
                <div className={"upload__container upload__container--thumbnail"}>
                    <label htmlFor="thumbnail" className="upload__form-label">VIDEO THUMBNAIL</label>
                    <img 
                        src={thumbnailImage} 
                        className="upload__thumbnail" 
                        alt="racer about to start"
                        id="thumbnail" 
                    />
                </div>
                <div className={"upload__container upload__container--inputs"}>
                    <label htmlFor="title" className="upload__form-label">TITLE YOUR VIDEO</label>
                    <input
                        type="text"
                        id="title"
                        className={`upload__form-input ${isSubmitted && !title ? 'invalid' : ''}`}
                        placeholder="Add a title to your video"
                        value={title}
                        onChange={handleTitleChange}
                    />

                    <label htmlFor="description" className="upload__form-label">ADD A VIDEO DESCRIPTION</label>
                    <textarea
                        id="description"
                        className={`upload__form-textarea ${isSubmitted && !description ? 'invalid': ''}`}
                        placeholder="Add a description to your video"
                        value={description}
                        onChange={handleDescriptionChange}

                    />
                </div>
                <hr className={"upload__divider upload__divider--form"}></hr>
                <div className={`upload__container upload__container--buttons`}>
                    <button className="upload__publish-button" type="submit" onClick={handleSubmit}>
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
            <hr className={"upload__divider--last"}></hr>
        </div>
    )
}

export default UploadPage;
