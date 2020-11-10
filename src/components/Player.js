import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Player = () => {
    return(
        <div className='player'>
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='rewind' icon={faAngleLeft} />
                <FontAwesomeIcon className='play' icon={faPlay}/>
                <FontAwesomeIcon className='forward' icon={faAngleLeft}/>
            </div>
        </div>
    )
};

export default Player;