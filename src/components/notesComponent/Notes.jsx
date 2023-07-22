import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import axios from 'axios';



const Note = ({condition , conditionValue ,title , id , date}) => {
  const deleteFun = ()=>{
    const items = JSON.parse(localStorage.getItem("user"));
    axios
    .post(
      "http://localhost:4000/onenote",
      { 
        uid: items.uid,
        dataid: id 
      }
    )
    .then((res) => {
      console.log(res);
      if(conditionValue){
        condition(false)
      }
      else{
        condition(true)
      }
    })
  
  }
  return (<>
  <span>{title}</span>
  <div>
    <small>{date}</small>
    <MdDeleteForever onClick={deleteFun}/>
  </div>
  </>
  )
}

export default Note