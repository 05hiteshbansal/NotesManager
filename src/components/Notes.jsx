import React, { useState , useEffect , useRef} from "react";
import NewNote from "./notesComponent/NewNote";
import Note from "./notesComponent/Notes";
import axios from "axios";
import { TransitionGroup } from 'react-transition-group';
import { Paper } from '@mui/material';
//import { blue } from "@mui/material/colors";
import './notes.css'
const Notes = () => {
  // const isMounted = useRef(false);
  const [data, setData] = useState([]);
const [changed,setChanged]=useState(false)

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user"));
   // console.log(items.uid);
    axios.post("http://localhost:4000/getnotes", {uid:items.uid})
    .then((res) => {
      setData(res.data.fetchData[0].notes);
      console.log(res.data.fetchData[0].notes)
    });
    //console.log(isMounted);
    //console.log(isMounted.current);
    console.log(data)
  }, [changed]);
  
  return (
    <>
    <Paper styles={{backGround}} elevation={5} >
    <div className='notes'>
      {data.map((d, index) => (
        <div  key={index}>
          <Note title={d.note} date={d.date} id={d._id} condition={setChanged} conditionValue={changed}  />
        </div>
      ))
      }
  
      {/* <Button onClick={fun}>hello</Button> */}
      <NewNote condition={setChanged} conditionValue={changed}/>
      </div>
      </Paper>
    </>
  );
};

export default Notes;
