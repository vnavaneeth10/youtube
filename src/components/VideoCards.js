

const VideoCards = ({info}) => {
    

  return (
    <div className='p-2 m-2 w-72 shadow-lg rounded-xl '>

        <img className='rounded-lg' src={info?.snippet?.thumbnails?.medium?.url} alt='video-thumbnail'/>

        <ul>
            <li className='font-semibold py-1'>{info?.snippet?.title}</li>
            <li className='text-sm font-medium text-slate-400'>{info?.snippet?.channelTitle}</li>
            <li className='text-sm font-medium text-slate-400 py-1'>{info?.statistics?.viewCount} views</li>
        </ul>

    </div>
  )
}

export default VideoCards