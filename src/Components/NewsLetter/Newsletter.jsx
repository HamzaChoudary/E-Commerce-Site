import React from 'react';
import './Newsletter.css';

const NewsLetter = () => {
    return (
        <div className="newsletter">
                <h1>Get Exclusive Offers On Your Emaill</h1>
                <p>Subscribe to our newletter and stay updated</p>
            <div>
                <input type="emaill" placeholder='Your Email id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter