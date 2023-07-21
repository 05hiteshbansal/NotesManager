import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
const Note = (props) => {
  return (<>
  <span>{props.title}</span>
  <div>
    <small>{props.date}</small>
    <MdDeleteForever/>
  </div>
  </>
  )
}

export default Note