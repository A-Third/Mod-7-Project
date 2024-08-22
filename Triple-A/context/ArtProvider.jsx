import { handleFetch } from '../utils'
import { useState } from 'react'
import { useEffect } from 'react'
import ArtContext from './ArtContext'

const url = `https://api.artic.edu/api/v1/artworks`

const ArtProvider = ({ children }) => {
  const [artData, setArtData] = useState([])
  const [wrong, setError] = useState()


  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(url);
      if (data) setArtData(data.data);
      if (error) setError(error);
    };
    doFetch()
  }, [])

  const value = {
    artData
  }

  return (
    <ArtContext.Provider value={value}>
      {children}
    </ArtContext.Provider>
  )

}


export default ArtProvider