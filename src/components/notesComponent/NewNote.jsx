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
    "http://localhost:4000/notes",
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
    
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <div>
        <Typography gutterBottom variant="h5" component="div">
        <textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={newnote}
				onChange={fun}
			/>
        </Typography>
        <Typography variant="body2" color="text.secondary">{limit-newnote.trim().length} remaining ...</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={save}>Save</Button>
      </CardActions>
    </Card>    
    </>
  );
};

export default NewNote;
