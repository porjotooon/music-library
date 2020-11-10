import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    // useReference
    const audioRef = useRef(null)
    // event handler
    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        }else{
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }

    //gotten from stackoverflow
    const getTime = (time) => {
        return (
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    }

    //we used the special "onChange" like event from 
    //the audio tag, where we are now using that event
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration})
    }
    // state for considering time
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null, //default value aren't known
    })
    return(
        <div className='player'>
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='rewind' size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className='play' size="2x" icon={faPlay}/>
                <FontAwesomeIcon className='forward' size="2x" icon={faAngleRight}/>
            </div>
            <audio 
                onTimeUpdate={timeUpdateHandler} 
                ref={audioRef} 
                src={currentSong.audio}
                onLoadedMetadata={timeUpdateHandler}
            >
            </audio>
        </div>
    )
};

export default Player;