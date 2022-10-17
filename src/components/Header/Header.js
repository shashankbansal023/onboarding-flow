import React from 'react';
import logo from '../../icons/assets/logo1.png';
import './Header.css';

const Header = ({name}) => {
    return (
        <div className="header">
            <div className="logo">
                <img className='logo-img' src={logo} alt="logo"/>
            </div>
            <div className="name">{name} </div>
        </div>
    )
}

export default Header;