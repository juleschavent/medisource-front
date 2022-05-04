/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Skeleton from '@mui/material/Skeleton'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { useFetch } from '../../context/query'

function ShowContent({ value }) {
  const {
    data,
    loading,
    error,
  } = useFetch(value)

  if (error) {
    console.log('problème avec la base de donnée', error)
  }

  return (
    <Box padding="0 50px">
      {loading && (
      <Stack spacing={1} sx={{ maxWidth: '100%', mx: 'auto' }}>
        <Skeleton variant="text" />
        <Skeleton variant="rectangular" height={118} />
      </Stack>
      )}
      {!loading && data && (
        <Autocomplete
          disablePortal
          options={data}
          getOptionLabel={(option) => option[`name_${value}`]}
          // renderInput={(params) => <TextField {...params} label={value} />}
          renderInput={(params) => {
            console.log(params)
            return (
              <TextField value={params} label={value} />
            )
          }}
        />
      )}
    </Box>
  )
}

export default ShowContent
