import React,{useState,useEffect} from 'react';
import Navbar from './navbar/navbar';
import TopSection from './TopSection';
import Hr from './upper-componets/hr';

const Uppersection = (props) => {
    const [change, setchange] = useState(true);

    const MINUTE_MS = 6000;

   const setc= ()=>
   {
    const c = change;
    setchange(!c);
   }
useEffect(() => {
  const interval = setInterval(() => {
    console.log('Logs every minute');
    setc();
  }, MINUTE_MS);

  return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
}, [])

    return (<div className="uppersection">
    <div className='elementor-section' style={{"backgroundImage":change?"url(https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h11-rev-img-02.jpg)": "url(https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h11-rev-img-03.jpg"}}>
      <Navbar setIntro = {props.setIntro}/>
      <div className="container">
      <div className="row">

     <div className="col-2">
     <button className='arrowleft' onClick={()=>{setchange(!change);}}>{"<"}</button>
     </div>

      <div className="col">
          <TopSection change = {change}
        setchange = {setchange}
      />
      </div>

      <div className="col-2">
       <button className='arrowright'onClick={()=>{setchange(!change)}}>{">"}</button>
      </div>
   <Hr/>
    </div>
      </div>

      </div>
    </div>
    );
}

export default Uppersection
