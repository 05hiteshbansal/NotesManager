import React from "react";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Note = ({ condition, conditionValue, title, id, date }) => {
  const deleteFun = () => {
    const items = JSON.parse(localStorage.getItem("user"));
    axios
      .post("http://localhost:4000/onenote", {
        uid: items.uid,
        dataid: id,
      })
      .then((res) => {
        console.log(res);
        if (conditionValue) {
          condition(false);
        } else {
          condition(true);
        }
      });
  };
  return (
    <>
      <div className='note'>
        {title}
        <div className='note-footer'>
          {date}
            <MdDeleteForever className="delete-icon" onClick={deleteFun} />
        </div>
      </div>
    </>
  );
};

export default Note;
