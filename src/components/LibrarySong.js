import React from 'react';
import styled from 'styled-components'
import '../styles/app.scss'

const Librarysongs = styled.div`
    display:flex;
    align-items:center;
    padding: 1rem 2rem 1rem 2rem;
    cursor: pointer;
    img{
        width: 30%;
    }
    &:hover{
        background:rgba(222,235,280,0.75);
    }
`
const SongDesc = styled.div`
    padding-left: 1rem;
    h3{
        font-size: 1rem
    }
    h4{
        font-size: 0.7rem;
    }
`


const LibrarySong = ({ isPlaying, audioRef, song, songs, setCurrentSong, id }) => {
    const songSelectHandler = () => {
        const selectedSong = songs.filter(song => song.id === id)
        setCurrentSong(selectedSong[0]) // this is done so because the selected songs is returned as an array
        //check if song is playing
        if(isPlaying){
            const playPromise = audioRef.current.play()
            if(playPromise !== undefined){
                playPromise.then(audio => audioRef.current.play())
            }
        }
    }
    return(
        <Librarysongs onClick={songSelectHandler} className={`${song.active ? "selected" : ""}`}>
            <img alt={song.name} src={song.cover}></img>
            <SongDesc>
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </SongDesc>
        </Librarysongs>
    )
};

export default LibrarySong;