import react from 'react';
import Navbar from './Navbar';

function Proctor(){
    return (
        <div>
            <Navbar />
            <h1>Proctor Page</h1>
            <div>
                <h1>Rooms 01-12</h1>
                <div>
                    
        <iframe
          src="https://tokbox.com/embed/embed/ot-embed.js?embedId=1f1059f3-ed6d-4a1b-9fd0-01f988a0bdea&room=room1&iframe=true"
          width="400"
          height="400"
          scrolling="auto"
          allow="microphone; camera"
        ></iframe>
      

                </div>
            </div>
        </div>
        
    )
}

export default Proctor;