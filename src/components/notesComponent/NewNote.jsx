import React, { useState } from "react";

const NewNote = () => {
  const [newnote, setNewnote] = useState('');
  const limit = 200;

const fun =(e)=>{
    console.log(limit-newnote.trim().length)
    if(limit-newnote.trim().length>=0 ){
        setNewnote(e.target.value)}
}

const save =()=>{
    if (newnote.trim().length > 0) {
       // handleAddNote(noteText);
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
