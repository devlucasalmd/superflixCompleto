import React from 'react';
import "./Modal.css";
import { AiFillCloseCircle } from 'react-icons/ai';
import Form from './Form';

interface ModalProps {
  fecharOModal: () => void;
  EditarVideo: (id: string | null, title: string, desc: string, url: string) => void;
  onCreateVideo: (title: string, desc: string, url: string) => void;
}

function Modal(props: ModalProps) {
  return (
    <div className='fundo'>
      <div className="closeModal" onClick={() => { props.fecharOModal(); localStorage.clear(); }}>
        <AiFillCloseCircle size={40} color='white' />
      </div>
      <div>
        <Form FecharModal={props.fecharOModal} Editar={props.EditarVideo} onCreateVideo={props.onCreateVideo} />
      </div>
    </div>
  );
}

export default Modal;
  