
import { useState } from 'react';
import './App.css';
import HighlySkilled from './componets/highly-skiled/highly-skilled';
import Intro from './componets/intro/intro';
import StepsForm from './componets/steps-form/steps-form';
import Uppersection from './componets/uppersection';


function App() {
  const [intro, setIntro] = useState(false);
  return (
    <div>
      {intro?<Intro setIntro = {setIntro}/>:""}
    <Uppersection setIntro = {setIntro}/>


    <HighlySkilled/>
    <StepsForm/>
    
    <div className='check-1000'></div>
    </div>
  );
}

export default App;
