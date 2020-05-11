import React from 'react';
import classes from './Modal.css';
import aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop'
const modal = (props) => (
    <>
    <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
        >
            {props.children}
        </div>

    </>
);

export default modal;