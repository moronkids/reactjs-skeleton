import React, {useState, useEffect, Component} from 'react';

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

    return(
        <div>
            <p>Status :</p>
            <br/>
            <h3>{stat.loggedStatus}</h3>
        </div>
    );
}
