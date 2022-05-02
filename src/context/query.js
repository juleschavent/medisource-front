import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

export const GetSysteme = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  // axios.get('http://localhost:3001/systeme').then((response) => response.data)
  //   .catch((error) => error)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('/stuff/to/fetch')
        setData(response)
      } catch (error) {
        console.error(error)
      }
      setLoading(false)
    }

    fetchData()
  }, [])

  return { data, loading }
}

export const GetOrgane = () => {
  axios.get('http://localhost:3001/organe').then((response) => response.data)
    .catch((error) => error)
}
