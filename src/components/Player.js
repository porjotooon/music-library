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

    // handler for dragging
    const dragHandler = e => {
        audioRef.current.currentTime = e.target.value   /* MATCHES AND UPDATES THE AUDIO */
        setSongInfo({...songInfo, currentTime: e.target.value}) // what this does is it follows it to 
                                                               // the point it's dragged to
    }

    // state for considering time
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0, //default value aren't known
    })
    return(
        <div className='player'>
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                    min={0} 
                    max={songInfo.duration} 
                    value={songInfo.currentTime} 
                    type="range" 
                    onChange={dragHandler}
                />
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