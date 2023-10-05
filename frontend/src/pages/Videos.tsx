import React,{useState,useEffect} from 'react'
import { videoProps } from '../interfaces/videoProps' 
import Video from '../components/Video'
import {getVideosData} from '../hooks/getVideosData'
import { DELETED_VIDEO } from '../types/deleteVideoTypes'
import Form from '../components/Form'
import AddNewButton from '../components/Button'
import Modal from '../components/Modal'
import axios from 'axios'
import { deleteVideo } from '../hooks/deleteVideo'

function Videos() {
  const [videos,setVideos] = useState<videoProps[]>([])
  const [showModal, setShowModal] = useState<boolean>(false);

  const mudarModal = ()=>{
    setShowModal((state)=>!state)
  }
  useEffect(()=>{
    getVideosData()
      .then((res:videoProps[])=>setVideos(res))
      .catch((err:any)=>console.log(err))
  },[])

  const createVideo = (name: string, description: string, url: string) => {
    axios.post<{ video: videoProps }>(`http://localhost:3001/videos/createVideo`, { name, description, url })
      .then((res) => {
        setVideos([...videos, res.data.video]);
      })
      .catch((err) => console.log("erro ao pegar os dados da api", err));
  };

  const deleteVideoWithSucccess = (resHook: string,id: string)=>{
    if (resHook == DELETED_VIDEO){
      setVideos(videos.filter(v => v._id !== id))
    }
  }

  const editVideo = (_id: string, name: string, description: string, url: string) => {
    axios.put<{ video: videoProps }>(`http://localhost:3001/videos/editVideo/${_id}`, { _id, name, description, url })
      .then((res) => {
        const newUpdatedVideos = videos.map((v) => (v._id === _id ? res.data.video : v));
        setVideos(newUpdatedVideos);
      })
      .catch((err) => console.log("erro ao pegar os dados da api", err));
  };


  return (
    <div>
       <h1>Videos inscritos</h1>
       <AddNewButton abrirOModal={mudarModal} />
      {
        showModal ? <Modal EditarVideo={ editVideo } onCreateVideo={createVideo} fecharOModal={mudarModal} />
       : null
      }
      <div className='videos-div'>      
        {videos.map((v) => (
          //  deleteVideo={DELETED_VIDEO} abrirOModal={mudarModal}
            <Video key={v._id}{...v} />
          ))}
      </div>
    </div>        
  )
}

export default Videos