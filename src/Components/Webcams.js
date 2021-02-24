import React, { useRef, useEffect } from 'react';
import Navbar from './Navbar';


function Webcams(){
    const room1=useRef(null);

    useEffect(() => {
        const scripty = document.createElement('script');
        scripty.src = 'https://tokbox.com/embed/embed/ot-embed.js?embedId=1f1059f3-ed6d-4a1b-9fd0-01f988a0bdea&room=DEFAULT_ROOM';
        document.getElementById('room1').appendChild(scripty)
        
    }, []);
    return (
        <div>
            <Navbar />
            <h1>Webcams Page</h1>
            <div id='room1' ref={room1} width="400" height="400" />
        </div>
    )
}

export default Webcams