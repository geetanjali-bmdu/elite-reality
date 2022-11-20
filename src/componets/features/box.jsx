import React from 'react'
import './feautres'
export default function Box(props) {
  return (
    <div className='features-box'>
        <h1 className="box-bg-heading">{props.bgHeading}</h1>
        <h4 className="box-heading-top">{props.headingTop}</h4>
    </div>
  )
}
