import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Player = ({ songInfo, setSongInfo, audioRef, currentSong, isPlaying, setIsPlaying }) => {

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



    // handler for dragging
    const dragHandler = e => {
        audioRef.current.currentTime = e.target.value   /* MATCHES AND UPDATES THE AUDIO */
        setSongInfo({...songInfo, currentTime: e.target.value}) // what this does is it follows it to 
                                                               // the point it's dragged to
    }

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
                <FontAwesomeIcon onClick={playSongHandler} className='play' size="2x" icon={isPlaying ? faPause: faPlay}/>
                <FontAwesomeIcon className='forward' size="2x" icon={faAngleRight}/>
            </div>
        </div>
    )
};

export default Player;