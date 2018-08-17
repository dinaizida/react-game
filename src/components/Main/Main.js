import React from 'react';
import "./Main.css";
const Main = props => (
    <div className={`col m10 s12 wrapper ${props.shake}`}>
        {props.children}
    </div>
);

export default Main;