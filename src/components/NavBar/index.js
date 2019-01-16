// NPM
import React from 'react';

// PROJECT
import './navbar.css'
import logo from '@/assets/img/wtjungle-logo.png'

const navBar = (props) => (
    <div className="nav-bar">
        <div className="logo">
            <span className="logo-img">
                <img src={logo} alt="logo"/>
            </span>
            <span className="welcome">Welcome to the jungle</span>
        </div>
        <div className="btn-container">
            <button className="btn btn-previous" onClick={props.prevClicked}/>
            <button className="btn btn-next" onClick={props.nextClicked}/>
        </div>
    </div>
);

export default navBar;
