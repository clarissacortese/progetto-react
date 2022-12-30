import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player/file';
import alarmSound from "../../sounds/alarm.mp3";
import "./timer.css";

function getSeconds(givenTime) {
  let seconds = Math.floor((givenTime / 1000) % 60);
  if (seconds < 10) {
      return "0" + seconds
  } else {
      return seconds
  }
}

function getMinutes(givenTime) {
  let minutes = Math.floor((givenTime / 60000) % 60)
  if (minutes < 10) {
      return "0" + minutes
  } else {
      return minutes
  }
}

export default function Timer() {
    const [chosenTime, setChosenTime] = useState(0);
    const [time, setTime] = useState(1);
    const [timerOn, setTimerOn] = useState(false);

    const handleChange = (event) => {
      setChosenTime(event.target.value);
    };

    const handleClick = () => {
      setTime(+chosenTime * 60000)
    };

    useEffect(() => {
      let interval = null;

      if (timerOn) {
        interval = setInterval(() => {
          setTime(prevTime => (prevTime !== 0)? prevTime -= 10 : setTime(0));
        }
        , 10);
      } else {
        clearInterval(interval);
      }

      return () => clearInterval(interval);

    }, [timerOn]
    );

    return (
        <div className="timer">
            <h2 className="text-center">Set the timer and enjoy your meditation:</h2>
            <div className="timer-button-wrapper">
              <input type="number" className="input-timer text-center" min="1" onChange={handleChange} value={chosenTime}/>
              <button className="timer-button" onClick={handleClick}>Let's start!</button>
            </div>
            <h2 className="text-center"><span>{getMinutes(time)}</span>:<span>{getSeconds(time)}</span></h2>
            <div className="timer-button-wrapper">
              <button className="timer-button" onClick={()=>{setTimerOn(true)}}>Play</button>
              <button className="timer-button" onClick={()=>{setTimerOn(false)}}>Pause</button>
              <button className="timer-button" onClick={()=>{setTimerOn(false); setTime(0)}}>Stop</button>
            </div>
            <ReactPlayer
            className="alarm"
            url={alarmSound}
            height="10%"
            width="10%"
            controls={true}
            playing={(time === 0)? true : false}
            />
        </div>
  )
}