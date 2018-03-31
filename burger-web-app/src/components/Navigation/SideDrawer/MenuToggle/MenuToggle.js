import React from 'react';

import classes from './MenuToggle.css';

const menuToggle = (props) => {
    return (
        <div
            className={classes.MenuToggle}
            onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default menuToggle;