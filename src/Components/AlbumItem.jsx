import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({image, name, desc, id}) => {

  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='p-2 text-white  min-w-[160px] hover:bg-[#ffffff26] '>
        <img className='rounded' src={image} />
        <p className='font-bold text-sm my-2'>{name}</p>
        <p className='text-sm text-slate-200'>{desc}</p>
      
    </div>
  )
}

export default AlbumItem
