import React, { useState , useEffect , useRef} from "react";
import NewNote from "./notesComponent/NewNote";
import Note from "./notesComponent/Notes";
import axios from "axios";
import { Button } from "@mui/material";
const Notes = () => {
  const isMounted = useRef(false);
  const [data, setData] = useState();

  // useEffect(() => {
  //   //console.log(isMounted);
  //   //console.log(isMounted.current);
  //   if (isMounted.current) return;
  //   else {
  //     isMounted.current = true;
  //     fun();
  //   }
  // }, [NewNote]);
  const items = JSON.parse(localStorage.getItem("user"));
  console.log(items.uid);
  const fun = () => {
    axios
      .get("http://localhost:4000/notes", {
        uid: items.uid
      })
      .then((res) => {
        setData(res.data);
        console.log(data)
      });
  };

  return (
    <>
      {/* {data.map((d, index) => (
        <div key={index}>
          <Note title={d.note} date={d.date} />
        </div>
      ))
      } */}
      <Button onClick={fun}>hello</Button>
      <NewNote />
      notes
    </>
  );
};

export default Notes;
