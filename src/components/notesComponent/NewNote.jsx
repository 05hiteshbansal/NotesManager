import React, { useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
const NewNote = ({condition , conditionValue}) => {
  const [newnote, setNewnote] = useState('');
  const limit = 200;

const fun =(e)=>{
    console.log(limit-newnote.trim().length)
    if(limit-newnote.trim().length>=0 ){
        setNewnote(e.target.value)}
}

const postdata = ()=>{
  const items = JSON.parse(localStorage.getItem("user"));
  axios
  .post(
    "https://note-manager.onrender.com/notes"||"http://localhost:4000/notes",
    { 
      uid: items.uid,
      data:[{note:newnote}]
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

const save =()=>{
    if (newnote.trim().length > 0) {
       postdata()
       setNewnote('');
       
    }
}

  return (
    <>
        <div className='note new'>
        <textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={newnote}
				onChange={fun}
        style={{fontSize:"14px"}}
			/>
        <div className="note-footer">{limit-newnote.trim().length} remaining ...
        <Button className="save" onClick={save}>Save</Button>    </div>
        </div>
    </>
  );
};

export default NewNote;
