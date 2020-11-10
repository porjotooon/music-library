import React, { useState, useRef } from 'react';
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

  // useReference
  const audioRef = useRef(null)

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

  // state for considering time
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0, //default value aren't known
  })

  //we used the special "onChange" like event from 
  //the audio tag, where we are now using that event
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration})
}
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles/>
        <Switch checked={state} onChange={toggleTheme} className="switch"/>
        <div className="App">
          <Song currentSong={currentSong}/>
          <Player
            setSongInfo={setSongInfo}
            songInfo={songInfo}
            audioRef={audioRef}
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying} 
            currentSong={currentSong}
          />
          <Library 
            songs={songs} 
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
          <audio 
                onTimeUpdate={timeUpdateHandler} 
                ref={audioRef} 
                src={currentSong.audio}
                onLoadedMetadata={timeUpdateHandler}
            >
            </audio>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
