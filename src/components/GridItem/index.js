// NPM
import React from 'react';
// PROJECT
import './gridItem.css'

const item = (props) => (
    <div style={props.style} className="content-item">
        {renderItem(props.item)}
    </div>
);

const renderItem = item => {
    if (item.type === "text") {
        return (
            <div className="quote-wrapper">
                <div className="quote-text">
                    {item.content}
                </div>
            </div>

        );
    }

    if (item.type === "image") {
        return (
            <div className="image">
                <img className="thumbnail" src={item.url} alt={item.id}/>
            </div>
        );
    }

    if (item.type === "video") {
        return (
            <div className="video">
                <img className="thumbnail" src={item.thumbnail} alt={item.id}/>
                <div className="info-wrapper">
                    <div className="info">
                        <button/>
                        <div className="info-content">
                            <div className="main-title">{item.title}</div>
                            <div className="subtitle">{item.subtitle}</div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default item;
