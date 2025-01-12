/** @format */

import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className='mt-5'>
      <div className='flex items-center justify-between'>
        <div className='flex gap-3'>
          <img
            className='w-7 bg-black rounded-xl p-[6px]'
            src={assets.arrow_left}
          />
          <img
            className='w-7 bg-black rounded-xl p-[6px]'
            src={assets.arrow_right}
          />
        </div>
        <div className='flex gap-3'>
          <button className='bg-white rounded-full px-3 py-[3px] font-semibold'>
            Explore Premium
          </button>
          <button className='bg-black px-3 py-1 rounded-full text-white font-semibold'>
            Install App
          </button>
          <p className='bg-purple-600 font-semibold rounded-full px-3 py-1'>
            C
          </p>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
      <button className='bg-white px-3 py-1 rounded-full text-black'>
            All
          </button>
          <button className='bg-black px-3 py-1 rounded-full text-white '>
            Music
          </button>
          <button className='bg-black px-3 py-1 rounded-full text-white '>
            Podcasts
          </button>
      </div>
    </div>
  );
};

export default Navbar;
