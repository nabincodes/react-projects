import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => {
    return(
        <div className={classes.buildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button 
            onClick={props.less}
            className={classes.Less} 
            disabled={props.disabled}>Less</button>
        <button 
            onClick={props.more}
            className={classes.More}>More</button>        
    </div>
    );
};

export default buildControl;