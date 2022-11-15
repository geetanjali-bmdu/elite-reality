import React from 'react';
import 'animate.css'
// import { motion } from "framer-motion";
const Middle = () => {
    return (
        <div className='mid-contents'>
            <img className='sign-img animate__slideInUp  animate__delay-2s	2s' src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h11-rev-img-04.png" alt="sign-img"/>
            <p className='title animate__slideInUp'>Halsten Solutions</p>
          <p className='para-upper animate__slideInUp animate__delay-2s	2s'>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudia laudantium blanditiis quas!  fugiat dolorum, quidem consequatur corrupti sunt ipsam!
            </p>
          <button className='btn btn-outline-light btn-lg'> view more</button>
        </div>
    );
}

export default Middle;
