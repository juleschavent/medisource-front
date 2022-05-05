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
          // eslint-disable-next-line react/jsx-props-no-spreading
          renderInput={(params) => {
            console.log(params)
            // params.InputProps.label = false
            const InputProps = {
              ...params.InputProps,
              disabled: true,
              // color: 'error',
            }
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <TextField {...params} label={value} variant="standard" />
          }}
        />
      )}
    </Box>
  )
}

export default ShowContent
