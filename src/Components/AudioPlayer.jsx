import React from 'react'
import {  assets, songsData } from '../assets/assets'

const AudioPlayer = () => {
  return (
    <div className='w-full bg-black px-5 py-3 flex justify-between items-center fixed bottom-0 left-0 right-0'>
        <div className='flex items-center gap-4'>
            <img className='w-12' src={songsData[0].image} />
            <div className='flex flex-col gap-1'>
            <p className='text-white text-sm font-semibold'>{songsData[0].name}</p>
            <p className='text-white font-light text-sm'>{songsData[0].desc.slice(0,12)}</p>

            </div>
        </div>
        <div className='flex flex-col gap-3 items-center'>
            <div className='flex gap-4'>
                <img className='w-4' src={assets.shuffle_icon} />
                <img className='w-4' src={assets.prev_icon} />
                <img className='w-4' src={assets.play_icon} />
                <img className='w-4' src={assets.next_icon} />
                <img className='w-4' src={assets.loop_icon}  />
            </div>
            <div className='flex items-center gap-4 text-white'>
            <p>0:00</p>
            <hr className='h-[3px] w-96 rounded bg-white' />
            <p>0:00</p>

            </div>
        </div>
        <div className='flex items-center gap-3'>
           
            <img className='w-4' src={assets.plays_icon} />
            <img className='w-4' src={assets.mic_icon} />
            <img className='w-4' src={assets.queue_icon} />
            <img className='w-4' src={assets.speaker_icon} />
            <div className='flex items-center gap-2'>
            <img className='w-4' src={assets.volume_icon}  />
            <hr className='h-[3px] w-16 rounded bg-white' />
            </div>

            <img className='w-4' src={assets.mini_player_icon}  />
            <img className='w-4' src={assets.zoom_icon}  />
            
            
            
           

           
        </div>
      
    </div>
  )
}

export default AudioPlayer
