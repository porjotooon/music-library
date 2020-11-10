import React from 'react';
import styled from 'styled-components'

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

const LibrarySong = ({ song }) => {
    return(
        <Librarysongs>
            <img alt={song.name} src={song.cover}></img>
            <SongDesc>
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </SongDesc>
        </Librarysongs>
    )
};

export default LibrarySong;