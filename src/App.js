
import { useState } from 'react';
import './App.css';
import HighlySkilled from './componets/highly-skiled/highly-skilled';
import Intro from './componets/intro/intro';
import StepsForm from './componets/steps-form/steps-form';
import Uppersection from './componets/upper-componets/uppersection';
import {BrowserView} from 'react-device-detect';
import Slider from './componets/slider/slider';
import Feautres from './componets/features/feautres';
import Profestional from './componets/profestional/profestional';

function App() {
  const [intro, setIntro] = useState(false);

  return (
    <div>
      <BrowserView>
      {intro?<Intro setIntro = {setIntro}/>:""}
      </BrowserView>
    <Uppersection setIntro = {setIntro}/>
    <HighlySkilled/>
      <StepsForm/>
      <Feautres/>
      {/* <div className="check-1000">

      </div> */}
   <Profestional/>
   <div className="check-1000"></div>
    </div>
  );
}

export default App;
