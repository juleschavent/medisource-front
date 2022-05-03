/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
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
    <Box sx={{ width: '100%' }}>
      {loading && <CircularProgress color="warning" />}
      {data && data.map((el) => (
        <p key={el[`id_${value}`]}>
          {el[`name_${value}`]}
        </p>
      ))}
    </Box>
  )
}

export default ShowContent
