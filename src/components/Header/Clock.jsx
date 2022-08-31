import React , {useState} from 'react'
import { useEffect } from 'react';
import '../Style/Header.css';

function Clock() {
    const [clockState, setClockState] = useState();

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        let time2 = new Date().toLocaleString
        setClockState(time);
    }


    useEffect(()=>{
        setInterval(updateTime,1000)
    }, [])


  return (
    <div className='clock-box'>
        <h1 className='clock-box-h'>
          {clockState}

        </h1>
    </div>
  )
}

export default Clock