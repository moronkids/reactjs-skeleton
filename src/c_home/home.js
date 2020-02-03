import React, {useState, useEffect, Component} from 'react';
import { Redirect } from 'react-router-dom'

export default function Home(props) {
    console.log(props)
    const [stat, setStat] = useState({
        loggedStatus : 'Belum Login'
    })

    const checkStatus = () => {
        let status = localStorage.getItem('email');
        if (status != null) {
            setStat({ ...stat, loggedStatus: "Sudah login"});
        }
    }

    useEffect(() => {
        checkStatus();
    });
    const logOut = () => {
        alert('logout');
        localStorage.clear();
        window.location.href = '/home';
    }
    return(
        <div>
            <p>Status :</p>
            <br/>
            <h3>{stat.loggedStatus}</h3>
            <br/>
            <h1>Logout</h1>
            <button type="submit" onClick={logOut}>Submit</button>
        </div>
    );
}
