import React, { useState , useEffect , useRef} from "react";
import NewNote from "./notesComponent/NewNote";
import Note from "./notesComponent/Notes";
import axios from "axios";
import ResponsiveAppBar from "./homeComponents/Navbar";
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
    <div>
    <ResponsiveAppBar/>
    <div className ="notes-list main">
      {data.map((d, index) => (
        <div  key={index}>
          <Note title={d.note} date={d.date} id={d._id} condition={setChanged} conditionValue={changed}  />
        </div>
      ))
      }
      <NewNote condition={setChanged} conditionValue={changed}/>
      </div>
      </div>
    </>
  );
};

export default Notes;
