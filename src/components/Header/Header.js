import React from 'react';
import './Header.scss';
import logo from '../../assets/images/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import searchIcon from '../../assets/images/icons/search.svg';
import uploadIcon from '../../assets/images/icons/upload.svg';

function Header(){
    return (
        <header className="header">
            <div className="header__logo-container">
                <img className='header__logo' src={logo} alt='BrainFlix Logo'/>
            </div>
            <div className="header__subcontainer">
                <img src={searchIcon} alt = "search icon" className = "header__search-icon"/>
                <input className="header__search" type="text" placeholder="Search" />
                <div className="header__avatar"><img className="header__avatar-image" src={avatar} alt='avatar'/></div>
            </div>
            <button className="header__upload-button">
                <img src={uploadIcon} alt='Upload icon' className="header__upload-icon"/>
                <span className="header__text">UPLOAD</span>
            </button>
        </header>
    )
}

export default Header;