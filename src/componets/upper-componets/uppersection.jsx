import React,{useState,useEffect} from 'react';
import Navbar from '../navbar/navbar';
import Slider from '../slider/slider';
import Middle from './middle';

const Uppersection = (props) => {
    return (
    <>
    <div className="uppersection-mobile">
<Middle/>
    </div>
    <div className="uppersection">
       <Navbar setIntro = {props.setIntro}/>
       <Slider/>
      </div>
    </>
    );
}

export default Uppersection
