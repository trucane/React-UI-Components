import React from 'react';
import './Footer.css';


function Footer(){
    return (
        <div className="footer-container">
            <div><span><i className="far fa-comment comments "></i>  </span></div>
            <div><span><i className="fas fa-sync-alt retweet move"></i> 6 </span></div>
            <div><span><i className="far fa-heart likes move"></i> 4 </span></div>
            <div><span><i className="far fa-envelope messages move"></i></span></div>
        </div>
    );
}

export default Footer;