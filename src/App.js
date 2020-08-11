import React from 'react';
import Game from './components/game/Game';
import rulyrooster from './assets/images/rulyrooster.png';
import outFoxed from './assets/images/outFoxed.png'

import '../src/App.css'

function App() {
  const roosters = {
      name: 'Rulyville Roosters',
      logoSrc: rulyrooster
  }

  const foxes = {
      name: 'Funkytown Foxes',
      logoSrc: outFoxed
  }
  return (
      <div className="App">
          <Game
              venue="Rulyville Arena"
              homeTeam={roosters}
              visitingTeam={foxes}
          />

          <Game
              venue="Funkytown Center"
              homeTeam={foxes}
              visitingTeam={roosters}
          />
      </div>
  )
}


export default App;

// Clipart images courtesy of: https://clipartix.com/fox-clipart-image-256/ and
// https://clipartix.com/rooster-clip-art-image-32293/ and https://images.freeimages.com/images/premium/previews/3937/39372318-basket-ball-net.jpg

// Audio sound credits courtesy of: https://www.freesoundeffects.com/free-track/bounce-1-468901/
// https://www.freesoundeffects.com/free-track/swish-468906/

