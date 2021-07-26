import './App.css';
import VideoCard from './VideoCard';
import axios from "./axios"
import {useState,useEffect} from "react"
function App() {
  const [videos,setVideos]=useState([])

  useEffect(()=>{
        const fetchData= async()=>{
            await axios.get("/get/video")
            .then((res)=>{
              setVideos(res.data)
            })
            .catch((err)=>{
              console.log(err.message)
            })

        }
        fetchData()
  },[])
  console.log(videos.url)
  return (
    <div className="app">
    <div className="app__top">
      <img  src ="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt=""/>
    </div>
    <div className="app__videos">
      {
        
        videos.map(({song,like,url,share,channel,avatar})=>(
          <VideoCard 
          song={song}
          src={url}
          chanels={channel}
          likes={like}
          shares={share}
          avatar={avatar}
          
          />
        ))
      }
         {/* <VideoCard 
         song="yeah its long "
         likes={200}
         shares={300}
         avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
         chanels="instagram"
         src="https://instagram.fdac48-1.fna.fbcdn.net/v/t50.2886-16/125071885_209118427463890_4511655080283915638_n.mp4?_nc_ht=instagram.fdac48-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=X_bIfwPiJNcAX-geiCJ&oe=5FB90C3D&oh=dd332223f3b04f7956be1680cb6641cf"/>
         <VideoCard 
          song="yeah its  "
          likes={300}
          shares={500}
          avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          chanels="instagram"
         src="https://instagram.fdac48-1.fna.fbcdn.net/v/t50.12441-16/125812946_4015563381806368_7517429485338314191_n.mp4?_nc_ht=instagram.fdac48-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=XSa6YOjivfwAX9tz4oH&oe=5FB8C2B8&oh=3902585c6e7b0527711271f60a8ce415"/>
         <VideoCard 
          song="yeah its long "
          likes={240}
          shares={600  }
          avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          chanels="instagram"
         src="https://instagram.fdac48-1.fna.fbcdn.net/v/t50.2886-16/100405174_305215350493139_6908672018514253288_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjU0MC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fdac48-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=We4R0mfu9LwAX8gij_I&vs=17858781928938266_1173428856&_nc_vs=HBksFQAYJEdMWVAtQVhUejR0OGx4VUJBT2dWT2QyWWlPQmZia1lMQUFBRhUAAsgBABUAGCRHSXMwLWdYTDJORGNhelFMQUFoUWw5X3dBTFlwYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACa0zv7p9J25PxUCKAJDMywXQD2zMzMzMzMYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=86594f85d2&oe=5FB8BC82&oh=2ae92c888b65b7ab9fb5d1d7d198dc40"/>
         <VideoCard
          song="yeah its long "
          likes={700}
          shares={400}
          avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          chanels="instagram"
         src="https://instagram.fdac48-1.fna.fbcdn.net/v/t50.2886-16/104800918_190202115688206_4169468829588624090_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjU0MC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fdac48-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=OJ-jPN9fbacAX_i0zdF&vs=17858187764001677_2294566914&_nc_vs=HBksFQAYJEdKWWlQd1lPaDRyaC1Ld0FBTnFTc1VuUDdkdzVia1lMQUFBRhUAAsgBABUAGCRHTE4tTEFaSUkxVWxHMndBQUp3dE5sTGdoSlJyYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACaax522qvu4PxUCKAJDMywXQDzdsi0OVgQYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=e8df3680c3&oe=5FB8A200&oh=9b361f7abf6cceb78597f3f77f17b7dc" />
         <VideoCard 
          song="yeah its long "
          likes={100}
          shares={270}
          avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          chanels="instagram"
         src="https://instagram.fdac48-1.fna.fbcdn.net/v/t50.2886-16/104660841_178088650554158_5692855621179489627_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjY0MC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fdac48-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=g0tRB9F5vPMAX87o0An&vs=18108989080193268_96639688&_nc_vs=HBksFQAYJEdHbi1QQVl1TzhGX19LRUFBRnM5LVlFR0ZnRlBia1lMQUFBRhUAAsgBABUAGCRHSmFoT2dZdTRpaFRsVzBBQVBsdkVtYkJreXdRYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACboqeet8oGrQBUCKAJDMywXQEdzMzMzMzMYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=0ae4ae18ce&oe=5FB87F65&oh=5f7f72c2e7fcd6d98b81af7962c2b03d"/>
          <VideoCard 
          song="yeah its long "
          likes={240}
          shares={600  }
          avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          chanels="instagram"
         src="https://instagram.fdac48-1.fna.fbcdn.net/v/t50.2886-16/100405174_305215350493139_6908672018514253288_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjU0MC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fdac48-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=We4R0mfu9LwAX8gij_I&vs=17858781928938266_1173428856&_nc_vs=HBksFQAYJEdMWVAtQVhUejR0OGx4VUJBT2dWT2QyWWlPQmZia1lMQUFBRhUAAsgBABUAGCRHSXMwLWdYTDJORGNhelFMQUFoUWw5X3dBTFlwYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACa0zv7p9J25PxUCKAJDMywXQD2zMzMzMzMYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=86594f85d2&oe=5FB8BC82&oh=2ae92c888b65b7ab9fb5d1d7d198dc40"/> */}

    </div>
   
    </div>
  );
}
export default App;
