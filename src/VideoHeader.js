import React from 'react'
import "./VideoHeader.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
const VideoHeader = () => {
  return (
    <div className="videoheader">
      <ArrowBackIcon/>
      <h3>Rells</h3>
      <CameraAltIcon/>
      </div>
  
  )
}

export default VideoHeader
