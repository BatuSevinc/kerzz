import React, { useState } from 'react'
import {Navbar,Homepage} from './helpers/index'
import './App.css'
const App = () => {
  let storedData = localStorage.getItem('favorites');
  const [favorites,setFavorites] = useState(storedData ? JSON.parse(storedData) : [])
  return (
    <div>
      <Navbar favorites={favorites} setFavorites={setFavorites}/>
      <Homepage storedData={storedData} favorites={favorites} setFavorites={setFavorites}/>
    </div>
  )
}

export default App