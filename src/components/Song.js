import React from 'react';

const Song = ({currSong}) => {
    return(
        <div className='song-container'>
            <img src={currSong.cover}></img>
            <h1>{currSong.name}</h1>
            <h1>{currSong.artist}</h1>
        </div>
    )
};

export default Song;