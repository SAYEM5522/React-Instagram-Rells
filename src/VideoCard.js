import React from 'react'
import "./VideoCard.css"
import {useRef,useState} from "react"
import VideoHeader from './VideoHeader'
import Footer from './Footer'
const VideoCard = ({src,likes,shares,song,chanels,avatar}) => {
  const  ref = useRef(null)
  const [playing,setPlaying]=useState(false)
  const onVideoPlay=()=>{
    if(playing){
      ref.current.pause()
      setPlaying(false)
    }else{
      ref.current.play()
      setPlaying(true)
    }
  }
  return (
    <div className="videocard">
      <VideoHeader/>
     <video 
     onClick={onVideoPlay}
     className="videocard__player"
    ref={ref}
    src={src}
     alt="Ig rell"
    loop 
      > 
      </video>
      <Footer 
      chanel={chanels}
      song={song}
      like={likes}
      share={shares}
      avt={avatar}
      />
    </div>
  )
}

export default VideoCard
