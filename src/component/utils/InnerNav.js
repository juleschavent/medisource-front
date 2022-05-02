import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { GetSysteme } from '../../context/query'

function InnerNav() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const [systeme, setSysteme] = useState(null)

  const handleSysteme = () => {
    const {
      data,
      loading,
    } = GetSysteme()
  }

  console.log('systeme', systeme)
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Système" onClick={() => handleSysteme()} />
        <Tab label="Organe" />
        <Tab label="Maladie" />
        <Tab label="Traitement" />
      </Tabs>
      {loading && <p>loading</p>}
      {!loading && <p>not loading</p>}
    </Box>
  )
}

export default InnerNav
