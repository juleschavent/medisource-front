import React from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'
import { Container } from '@mui/material'
import Header from './component/utils/Header'
import InnerNav from './component/utils/InnerNav'
import { GetSysteme } from './context/query'

function App() {
  return (
    <div className="App" id="app">
      <Header />
      <InnerNav />
    </div>
  )
}

export default App
