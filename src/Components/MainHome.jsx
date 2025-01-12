/** @format */

import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const MainHome = () => {
  return (
    <div className="px-4 " >
      <Navbar />
      
        <h1 className='text-white font-bold text-2xl flex  mt-5'>
          Featured Charts
        </h1>
        <div className='flex gap-2 items-center  mt-4  overflow-auto px-1'>
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>

        <h1 className='text-white font-bold text-2xl flex  mt-5'>
          Today's Biggest Hits
        </h1>
        <div className='flex gap-2  mt-4  overflow-auto  px-1' >
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item.id}
            />
          ))}
        

      </div>
      

      
    </div>
  );
};

export default MainHome;
