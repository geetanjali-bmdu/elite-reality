import React from 'react'
import Box from './box'
import './features.css';
export default function Feautres() {
  return (
<div className="container margin-y-150px ">

    <div className='row'>
        <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 margin-y-20px mx-auto">
            <Box headingTop ="yearly projects" bgHeading = {23} />
        </div>
        <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 margin-y-20px mx-auto">
            <Box headingTop ="yearly projects" bgHeading = {23} />
        </div>
        <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 margin-y-20px mx-auto">
            <Box headingTop ="yearly projects" bgHeading = {23} />
        </div>
        <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 margin-y-20px mx-auto">
            <Box headingTop ="yearly projects" bgHeading = {23} />
        </div>


    </div>
</div>
  )
}
