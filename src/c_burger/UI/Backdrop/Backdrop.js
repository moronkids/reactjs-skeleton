import React from 'react';
import classes from './Backdrop.css'
const backdrop = (propsx) => (
    propsx.show ?
        <div className={classes.Backdrop} onClick={propsx.clicked}>
        </div> : null
);

export default backdrop;