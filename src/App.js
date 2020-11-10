import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global'
import styled from 'styled-components';

import Song from './components/Song';
import Player from './components/Player';
import './styles/app.scss'

//imported the music data
import data from './util';


function App() {
  const [theme, setTheme] = useState('dark');

  const [state, setState] = useState(true)

  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark')
      setState(true)
    } else {
      setTheme('light')
      setState(false)
    }
  }

  // this state used to store list of songs
  const [songs, setSongs] = useState(data())

  // this state used to show current song item
  const [currSong, setCurrSong] = useState(songs[0])
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles/>
        <Switch checked={state} onChange={toggleTheme} className="switch"/>
        <div className="App">
          <Song currSong={currSong}/>
          <Player/>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
