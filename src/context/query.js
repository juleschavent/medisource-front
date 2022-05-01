import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

useEffect(() => {
  axios.get('http://localhost:3001/systeme').then((response) => {
    console.log(response)
  })
}, [])
