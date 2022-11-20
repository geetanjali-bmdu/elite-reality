import React from 'react'
import Left from './left'
import Right from './right'

export default function HighlySkilled() {
  return (
    <div className="container highly-skilled ">
        <div className="row">
            <div className="col-12 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <Left/>
        
            </div>
            <div className="col col-lg-6 col-md-12">
            <Right/>
            
            </div>
        </div>
    </div>
  )
}
