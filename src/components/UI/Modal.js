import React from 'react'
import style from"./Modal.module.css"

import  ReactDOM from 'react-dom';
const Backdrop=(props)=>{
   return <div className={style.backdrop} onClick={props.onClick}>

   </div>
};
const Modaloverlay=(props)=>{
  return <div className={style.modal}>
    <div className={style.content}>{props.children}</div>

  </div>
}

function Modal(props) {
  return (
    <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />,document.getElementById('overlay'))}
    {ReactDOM.createPortal(<Modaloverlay>{props.children}</Modaloverlay>,document.getElementById('overlay'))}
    </React.Fragment>
  )
}

export default Modal