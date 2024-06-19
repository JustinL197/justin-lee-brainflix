import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import searchIcon from '../../assets/images/icons/search.svg';
import uploadIcon from '../../assets/images/icons/upload.svg';

function Header(){
    return (
        <header className="header">
            <Link to="/" className='header__logo-container'>
                <img className='header__logo' src={logo} alt='BrainFlix Logo'/>
            </Link>
            <div className="header__search-container">
                <img className = "header__search-icon" src={searchIcon} alt = "search icon" />
                <input className="header__search" type="text" placeholder="Search" />   
            </div>
            <div className="header__avatar"><img className="header__avatar-image" src={avatar} alt='avatar'/></div>
            <Link to="/upload" className="header__upload-button">
                <button className="header__upload-button">
                    <img src={uploadIcon} alt='Upload icon' className="header__upload-icon"/>
                    <span className="header__text">UPLOAD</span>
                </button>
            </Link>
        </header>
    );
}

export default Header;