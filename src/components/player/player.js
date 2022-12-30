import React, {useState} from 'react';
import ReactPlayer from 'react-player/file';
import "./player.css";
import sunriseSound from "../../sounds/sunrise.mp3";
import starsSound from "../../sounds/stars.mp3";
import alarmSound from "../../sounds/alarm.mp3";

export default function Player() {
  const [song, setSong] = useState(alarmSound);

  return (
    <section className="player col-sm-6">
        <h2 className="text-center">Choose your background music:</h2>
        <div className="button-wrapper">
            <button className="songButton" onClick={() => {setSong(sunriseSound)}}>Watching the sunrise</button>
            <button className="songButton" onClick={() => {setSong(starsSound)}}>Journey among the stars</button>
        </div>
        <div className="d-flex justify-content-center">
        <ReactPlayer
          url={song}
          height="50px"
          width="80%"
          playing={false}
          loop={true}
          controls={true} />
        </div>
    </section>
  )
}