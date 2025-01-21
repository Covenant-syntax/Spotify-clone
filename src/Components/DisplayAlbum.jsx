import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets } from '../assets/assets';

const DisplayAlbum = () => {
    const {id} = useParams();
    const albumData = albumsData[id];
  return (
    <div className='px-3'>
        <Navbar />
        <div className='flex'>
          <img className='w-[200px]' src={albumData.image}  />
          <div className='text-white'>
            <p>Playlist</p>
            <h1>{albumData.name}</h1>
            <p>{albumData.desc}</p>
            
            <p> 
              <img className='w-8 inline-block' src={assets.spotify_logo} /> 
              <b> Spotify </b> 
              • 1,234,567 ikes • 
              <b> 50 songs </b>
              <b> 50 songs </b>
            </p>
            
          </div>

        </div>
      
    </div>
  )
}

export default DisplayAlbum
