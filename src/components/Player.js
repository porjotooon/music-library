import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong }) => {
    // useReference
    const audioRef = useRef(null)
    // event handler
    const playSongHandler = () => {
        audioRef.current.play()
    }

    return(
        <div className='player'>
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='rewind' size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className='play' size="2x" icon={faPlay}/>
                <FontAwesomeIcon className='forward' size="2x" icon={faAngleRight}/>
            </div>
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
};

export default Player;