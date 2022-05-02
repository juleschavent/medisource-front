import React from 'react'
import Box from '@mui/material/Box'
import { useTheme } from '@emotion/react'
import { Typography } from '@mui/material'

function Header() {
  const theme = useTheme()
  // console.log(theme)
  return (
    <Box component="section" padding="100px 0" bgcolor={theme.palette.background.lightGrey}>
      <Typography align="center" variant="h1" color="textPrimary" sx={{ fontWeight: 600 }}>
        Medisource
      </Typography>
    </Box>
  )
}

export default Header
