import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import { Divider } from '@material-ui/core';

export const PrivateRoute = ({component:Component, ...rest}) =>
(    <Route
        {...rest}
        render={props =>
        localStorage.getItem('email') ?
           (<Component {...props} />):
           (<Redirect to={{
               pathname:"/",
               state: {from:props.location}
           }}/>)
        }
    />);
    // alert(props);

// export default function privateRoute(props){
//     console.log(props);
//     return(

//         <Component {...props}/>
//     );
// }