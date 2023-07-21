import React, { useState } from "react";
import axios from "axios";
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
    <><div>
      <textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={newnote}
				onChange={fun}
			/>
            <small>{limit-newnote.trim().length} remaining ...</small>

            <button onClick={save}>
					Save
				</button>
            </div>
    </>
  );
};

export default NewNote;
