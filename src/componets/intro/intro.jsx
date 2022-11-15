import React from 'react'
import Introfooter from './Introfooter'
import IntroHeader from './IntroHeader'
export default function Intro(props) {
  return (
    <div className='intro-side'>
        <i onClick={()=>{props.setIntro(false);}} className='crose'>x</i>
        <IntroHeader/>

        <Introfooter/>
    </div>

  )
}
