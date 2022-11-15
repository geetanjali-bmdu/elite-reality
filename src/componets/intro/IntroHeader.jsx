import React from 'react';
import logo from "../../logi.png";

const IntroHeader = () => {
    return (
        <div className='padi intro-header'>
           <img className="intro-logo" src={logo} alt="into" /> 
           <p>A truly professional theme designed for businesses and business consulting. </p>
           <a href='/' className="circle">
            FB
        </a>
        <a href='/' className="circle">
            LI
        </a>
        <a href='/' className="circle">
            IN
        </a>
        </div>
        
    );
}

export default IntroHeader;
