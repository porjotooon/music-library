import React from 'react'
import LibrarySong from './LibrarySong'
import styled from 'styled-components'

const DiLibrary = styled.div`
    position: fixed;
    top:0;
    left:0;
    width:20rem;
    height:100%;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    box-shadow: 2px 2px 50px rgb(204,204,204); 
    overflow: scroll;
    h2{
        padding: 2rem;
    }
`
// const Librarysongs = styled.div`
//     display:flex;
//     align-items:center;
//     flex-direction:column;
//     padding: 1rem 2rem 1rem 2rem;
//     img{
//         width: 30%;
//     }
// `

const Library = ({ songs, setCurrentSong }) => {
    return(
        <DiLibrary>
            <h2>Library</h2>
            <div>
                {songs.map(song => 
                    <LibrarySong
                        songs={songs} 
                        setCurrentSong={setCurrentSong} 
                        song={song}
                        id={song.id}
                        key={song.id}
                    />)}
            </div>
        </DiLibrary>
    )
}

export default Library