import React from 'react';

import './gridItem.css'

const item = (props) => (
    <div style={props.style} className="content-item">
        {props.item.id}
    </div>
);

export default item;
