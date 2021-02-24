import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Link to='/Proctor'>Mobile Proctor</Link>
            <Link to='/Webcams'>Webcam Proctor</Link>
        </div>
    )
}

export default Navbar;