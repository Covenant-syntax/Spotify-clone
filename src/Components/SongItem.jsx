import React from 'react'

const SongItem = ({image, name, desc, id}) => {
  return (
    <div className='p-2 text-white min-w-[160px] hover:bg-[#ffffff26] '>
        <img className='rounded' src={image} />
        <p className='font-bold text-sm my-2'>{name}</p>
        <p className='text-sm text-slate-200'>{desc}</p>
      
    </div>
  )
}

export default SongItem
