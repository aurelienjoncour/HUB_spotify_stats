import React, { useEffect } from 'react';

function getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
}

function App() {

    useEffect(() => {
        const params = getHashParams()
        if (params.access_token) {
            console.log("params: ", params.access_token);
            localStorage.setItem("accessToken", params.access_token);
        }
    })

    return (
        <div>
            Hello from the App
        </div>
    );
}

export default App;
