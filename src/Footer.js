import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import "./Footer.css"
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Ticker from "react-ticker"
const Footer = ({chanel,like,avt,share,song}) => {
  return (
    <div className="footer">
     <div className="footer__text">
       <Avatar src={avt}/>
       <h3>
         {chanel}.<Button>Follow</Button>
       </h3>
     </div>
     <div className="footer__icon">
         <MusicNoteIcon />
      <Ticker mode="smooth">
        {
          ({index})=>(
            <>
              <h1>{song}</h1>
            </>
          )
        }
      </Ticker>
       </div>
       <div className="footer__action">
         <div className="footer-action__left">
          <FavoriteIcon/>
          <ModeCommentIcon/>  
            <SendIcon/>
            <MoreHorizIcon/>

         </div>
         <div className="footer-action__right">
           <div className="footer-action-right__start">
          <FavoriteIcon/>
          <p>{like}</p>
           </div>
           <div className="footer-action-right__start">
           <ModeCommentIcon/> 
          <p>{share}</p>
           </div>
           </div>
       </div>
    </div>
  )
}

export default Footer
