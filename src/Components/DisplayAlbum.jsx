/** @format */

import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  return (
    <div className='px-3'>
      <Navbar />
      <div className='flex items-center space-x-4 mt-5'>
        <img className='w-[150px]' src={albumData.image} />
        <div className='flex flex-col gap-1'>
          <p className='text-[#b6b5b5] text-sm'>Playlist</p>
          <h1 className='text-white text-4xl font-bold'>{albumData.name}</h1>
          <p className='text-[#b6b5b5] text-sm'>{albumData.desc}</p>

          <p className='text-[#b6b5b5] text-sm'>
            <img className='w-5 inline-block' src={assets.spotify_logo} />
            <b className='text-white'> Spotify </b>• 1,234,567 likes •
            <b className='text-white'> 50 songs, </b>
            about 2 hr 30min
          </p>
        </div>
      </div>
      <div className='flex items-center justify-between mt-7 text-[#b6b5b5] text-sm w-[90%]'>
        <div className='flex items-center gap-4 '>
          <p>#</p>
          <p>Title</p>
        </div>
        <p>Album</p>
        <p>Date Added</p>
        <img className='w-5' src={assets.clock_icon} />
      </div>
      <hr className='border-[#b6b5b5] mt-3' />
      <div className='w-[100%] pb-5'>
        {songsData.map((item, index) => (
          <div
            key={index}
            className='flex items-center w-[90%] justify-between hover:bg-[#ffffff26] px-[6px]'>
            <div className='flex items-center gap-2 text-white text-sm'>
              <p>{index + 1}</p>

              <img className='w-[50px] p-2' src={item.image} />

              <p className='text-sm text-[#f6f6f6]'>{item.name}</p>
            </div>
            <p className='text-[#b6b5b5] text-sm'>{albumData.name}</p>
            <p className='text-[#b6b5b5] text-sm'>{albumData.name}</p>
            <p className='text-[#b6b5b5] text-sm'>{albumData.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAlbum;
