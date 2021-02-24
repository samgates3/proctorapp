import React, { useRef, useEffect } from 'react';
import Navbar from './Navbar';


function Webcams(){
    const room1=useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://tokbox.com/embed/embed/ot-embed.js?embedId=1f1059f3-ed6d-4a1b-9fd0-01f988a0bdea&room=DEFAULT_ROOM';

        room1.current.appendChild(script);
    }, []);
    return (
        <div>
            <Navbar />
            <h1>Webcams Page</h1>
            <div ref={room1} width="400" height="400"></div>
        </div>
    )
}

export default Webcams