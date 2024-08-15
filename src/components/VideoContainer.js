import React, { useState } from 'react'
import { useEffect } from 'react'
import { YOUTUBE_API_POPULAR_VIDEOS } from '../utils/constants'
import VideoCard from './VideoCard';
const VideoContainer = () => {
  const [videos, setVideos]= useState([]);
  useEffect( ()=>{

    getVideos();
   
},[])

const getVideos = async ()=>{
  const data = await fetch(YOUTUBE_API_POPULAR_VIDEOS);
  const json = await data.json();
  console.log("json is", json);
  setVideos(json.items);
}
  return (
    <div className='flex flex-wrap'> {videos.map((video)=> <VideoCard key={video?.id} info={video}/> )}</div>
  )
}

export default VideoContainer