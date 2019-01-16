// NPM
import React from 'react';
// PROJECT
import ProgressBar from '@/components/ProgressBar'


const footer = (props) => (
    <div>
        <ProgressBar percent={props.percent}/>
    </div>
);

export default footer;
