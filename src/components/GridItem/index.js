import React from 'react';

import './gridItem.css'

const item = (props) => (
    <div style={props.style} className="content-item">
        {renderItem(props.item)}
    </div>
);

const renderItem = item => {
    if(item.type === "text"){
        return(
            item.content
        );
    }

    if(item.type === "image"){
        return(
            <div className="image">
                <img className="thumbnail" src={item.url} alt={item.id}/>
            </div>
        );
    }

    if(item.type === "video"){
        return(
            <img className="thumbnail video" src={item.thumbnail} alt={item.id}/>
        );
    }
}

export default item;
