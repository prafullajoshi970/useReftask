import React from 'react'
import{useState,useRef} from 'react'

const Timer = () => {
    const timer=useRef(null);
    const[time,setTime]=useState(0);
    const startTimer=()=>{
      timer.current=  setInterval(()=>{
            setTime((prevTimer)=>prevTimer+1);
        },1000);
       
    }

    const StopTimer=()=>{
     clearInterval(timer.current)
    }
  return (
    <div className='timer'>
        <h1>Timer App using useRef</h1>
        <p>{time}</p>
        <span>
            <button onClick={startTimer}>start</button>
            <button onClick={StopTimer}>stop</button>
        </span>
    </div>
  )
}

export default Timer