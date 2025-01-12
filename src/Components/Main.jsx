import React from 'react'
import Navbar from './Navbar'
import {Routes, Route } from 'react-router-dom'
import MainHome from './MainHome'
import DisplayAlbum from './DisplayAlbum'

const Main = () => {
  return (
    <div className='bg-[#121212] w-[75%] min-h-screen ml-3'>
      <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='album/:id' element={<DisplayAlbum />} />
      </Routes>
        
      
    </div>
  )
}

export default Main
