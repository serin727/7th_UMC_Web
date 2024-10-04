import { useState } from 'react'
import './App.css'
import EachMovie from './components/EachMovies'

function App() {
  

  return (
    <div  style={{display:'flex', flexFlow:'row wrap'}}>
    {/* <p>{image}</p> */}
      <EachMovie
      />
    </div>
  )
}

export default App
