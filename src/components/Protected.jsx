import React, { useEffect } from "react";
//import { auth } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;

  const Navigate = useNavigate();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user"));
    console.log(items);
    if (!items) {
      Navigate('/login');
    }
  });

  return (
    <>
      <Component />
    </>
  );
};

export default Protected;
