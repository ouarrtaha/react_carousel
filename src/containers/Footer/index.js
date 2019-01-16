// NPM
import React from 'react';
// PROJECT
import ProgressBar from '@/components/ProgressBar'
import './footer.css'
import largeLogo from '@/assets/img/wtjungle-large.png'

const footer = (props) => (
    <div>
        <ProgressBar percent={props.percent}/>
        <div className="footer-info">
            <div className="footer-logo">
                <img src={largeLogo} alt="Welcome to the jungle"/>
            </div>
            <div className="footer-link">
                <a href="#">Voir le profil ></a>
            </div>
        </div>
    </div>
);

export default footer;
