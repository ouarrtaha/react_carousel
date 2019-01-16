import React from 'react';

import './navbar.css'

const navBar = (props) => (
    <div className="nav-bar">
        <div className="btn-container">
            <button className="btn btn-previous" onClick={props.prevClicked}/>
            <button className="btn btn-next" onClick={props.nextClicked}/>
        </div>
    </div>
);

export default navBar;
