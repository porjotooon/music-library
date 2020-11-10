import React, { useState } from 'react';
import Song from './components/Song';
import Player from './components/Player';
import './styles/app.scss'

//imported the music data
import data from './util';

function App() {

  // this state used to store list of songs
  const [songs, setSongs] = useState(data())

  // this state used to show current song item
  const [currSong, setCurrSong] = useState(songs[0])
  return (
    <div className="App">
      <Song currSong={currSong}/>
      <Player/>
    </div>
  );
}

export default App;
