import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'

const DisplayAlbum = () => {
    const {id} = useParams();
    console.log(id)
  return (
    <div className='px-3'>
        <Navbar />
      
    </div>
  )
}

export default DisplayAlbum