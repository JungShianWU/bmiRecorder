import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';


const Header = () => {
    return (
        <div className="ui menu">
            <div className="header item">
                <Link to="/">
                    <i className="heart icon red large" />
                </Link>
            </div>
            <div className="right menu">
                <GoogleAuth />
                <div className="item">Help</div>
            </div>
        </div>

    );
};




export default Header;