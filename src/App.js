import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';

// for light & dark theme
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global'

// components
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library'
import './styles/app.scss'

// music data
import data from './util';


function App() {
  const [theme, setTheme] = useState('dark');

  // state for Switch
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
  const [currentSong, setCurrentSong] = useState(songs[0])

  //playing state
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles/>
        <Switch checked={state} onChange={toggleTheme} className="switch"/>
        <div className="App">
          <Song currentSong={currentSong}/>
          <Player
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying} 
            currentSong={currentSong}
          />
          <Library songs={songs}/>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
