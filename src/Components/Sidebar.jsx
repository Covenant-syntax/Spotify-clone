import React from 'react'
import {assets} from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full bg-black hidden md:block'>
        <div className='w-full flex  gap-6 flex-col bg-[#121212] rounded py-3 mx-1'>
            <div className='flex gap-4 items-center ml-8'>
                <img className='w-6' src={assets.home_icon} />
                <p className='text-white font-bold'>Home</p>
            </div>
            <div className='flex gap-4 items-center ml-8'>
                <img className='w-6' src={assets.search_icon} />
                <p className='text-white font-bold'>Search</p>
            </div>
        </div>
        <div className='w-full rounded bg-[#121212] mt-2 pt-4 pb-36 mx-1'>
            <div className='flex justify-between px-4 flex-nowrap'>
                <div className='flex gap-4 items-center'>
                    <img className='w-9' src={assets.stack_icon}/>
                    <p className='text-white font-semibold'>Your Library</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <img className='w-4 ' src={assets.arrow_icon} />
                    <img className='w-4' src={assets.plus_icon} />
                </div>
            </div>
            <div className='bg-[#242424] mt-5 mx-2 py-4 pl-4 rounded'>
                <p className='text-white font-semibold mb-1'>Create your first playlist</p>
                <p className='text-white font-thin mb-5'>It's easy, we'll help you</p>
                <button className='bg-white rounded-3xl font-semibold px-4 py-1 '>Create playlist</button>
            </div>
            <div className='bg-[#242424] mt-4 mx-2 py-4 pl-4 rounded '>
                <p className='text-white font-semibold mb-1'>Let's find some podcasts to follow</p>
                <p className='text-white font-thin mb-5'>We'll keep you updated on new episodes</p>
                <button className='bg-white rounded-3xl font-semibold px-4 py-1'>Browse podcasts</button>
            </div>
           
            
        </div>



        
    </div>

  )
}

export default Sidebar
