import React, {useState} from 'react'


function AddNewButton(){
    const [mouse, setMouse] = useState(true)
    return(
      <div
        onMouseLeave={()=>setMouse(true)}
        onMouseEnter={()=>setMouse(false)}
        //onClick={()=>props.abrirModal()}
        className={`${mouse ? "addNewButton" : "addNewButton-mouse"}`}
      >
          {mouse ? "+" : "Adicionar um vídeo"}
      </div>
    )
}

export default AddNewButton