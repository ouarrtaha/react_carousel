import React from 'react';

const navBar = (props) => (
    <div>
        <button onClick={props.prevClicked}>previous</button>
        <button onClick={props.nextClicked}>next</button>
    </div>
);

export default navBar;
