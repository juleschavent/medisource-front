import React, { useCallback, useState } from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Container from '@mui/material/Container'
import Tab from '@mui/material/Tab'
import ShowContent from './ShowContent'

function InnerNav() {
  const [value, setValue] = useState('systeme')
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container maxWidth="lg">
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Système" value="systeme" />
        <Tab label="Organe" value="organe" />
        <Tab label="Maladie" value="maladie" />
        <Tab label="Traitement" value="traitement" />
      </Tabs>
      {value && <ShowContent value={value} />}
    </Container>
  )
}

export default InnerNav
