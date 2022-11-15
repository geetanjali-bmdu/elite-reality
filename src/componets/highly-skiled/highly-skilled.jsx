import React from 'react'
import Left from './left'
import Right from './right'

export default function HighlySkilled() {
  return (
    <div className="container highly-skilled ">
        <div className="row">
            <div className="col">

        <Left/>
            </div>
            <div className="col">

        <Right/>
            </div>
        </div>
    </div>
  )
}
