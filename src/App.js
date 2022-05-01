import React from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'

function App() {
  axios.get('http://localhost:3001/systeme').then((response) => {
    console.log(response)
  })
  return (
    <div className="App" id="app">
      <Button variant="contained" color="secondary">Contained</Button>
    </div>
  )
}

export default App
