import { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos,setVideos] = useState([]);

    useEffect(()=>{
      getVideos();
    },[])

    const getVideos = async () =>{
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      setVideos(json.items);
      console.log("json.items",videos);
      
      
    } 

  return (
    <div className='flex flex-wrap '>
      {videos.map((video, index)=>( 
        
        <Link to={"/watch?v="+ video.id}>
        <VideoCards key={video.index} info={video}/>
        </Link>
        ))}
      
    </div>
  )
}

export default VideoContainer