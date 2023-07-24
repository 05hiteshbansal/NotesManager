import React, { useState, useEffect } from "react";
import { auth, googleLogin } from "../config/firebaseConfig";
import { ImGoogle } from "react-icons/im";
import Button from '@mui/material/Button';

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  deleteUser,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import loginimage from "../media/login1.jpg"
import logo from "../media/logo.png"
function Auth() {
  const Navigate = useNavigate() 
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [user1, setuser1] = useState({});
  useEffect(() =>{
    const user = auth.currentUser;
    console.log(user, 2)
    if (user) {
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;
      const userinfo = { displayName, email, photoURL, emailVerified, uid };

      console.log(userinfo);
      //    dispatch(userInfo(user))
      localStorage.setItem("user", JSON.stringify(userinfo));
      // const Navigate = useNavigate();
       Navigate('/notes');
    }
     else 
     {
      console.log("None");
     }
  }, [user1]);

  // const signIn = async () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(user, userCredential.uid);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //     });
  // };

  const signInWithGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, googleLogin);
      console.log(user);
      setuser1(user);
    } catch (error) {
      console.log(error);
    }
  };

  const signout = async () => {
    try {
      const user = await signOut(auth);
      console.log(user);
      const items = localStorage.removeItem("user");
      console.log(items);
    } catch (error) {
      console.log(error);
    }
  };

  const delUser = async () => {
    const user = auth.currentUser;

    deleteUser(user)
      .then(() => {
        console.log("User is deleted successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (<>
  <div>
    <div className="login">
    <img src={loginimage} className="imagelogin" alt="Italian Trulli"/>
   
    <div className="googlelogin">
      {/* <input placeholder="Email...." onChange={(e) => { setEmail(e.target.value); }} /> */}
      {/* <input placeholder="Password...." onChange={(e) => {setPassword(e.target.value);}}/> */}
      {/* <button onClick={signIn}>Sign In</button> */}
      <img src={logo} style={{height:"100px" , margin:"20px"}} alt="Italian Trulli"/>
      <span className="text-login">Notes Keepa</span>
      <Button variant="contained" className="btnlogin" style={{backgroundColor:"#fb1616b0" , margin:"5px"}} onClick={signInWithGoogle} ><ImGoogle style={{marginRight:"5px"}}/>Google Login</Button>
      {/* <button  className="btnlogin" style={{backgroundColor:"#fb1616b0"}} onClick={signInWithGoogle}><ImGoogle style={{marginRight:"5px"}}/>Sign In with Google</button> */}
      <Button variant="contained"  className="btnlogin" style={{backgroundColor:"orange" , margin:"5px"}} onClick={signout}>Log Out</Button>
      <Button variant="contained" className="btnlogin" style={{backgroundColor:"orange" , margin:"5px"}} onClick={delUser}>Delete user</Button>
    </div>
    </div>
    </div>
    </>
  );
}

export default Auth;
