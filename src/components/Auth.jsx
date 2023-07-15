import React, { useState } from "react";
import { auth , googleLogin } from "../config/firebaseConfig";

import {createUserWithEmailAndPassword , signInWithPopup, signOut , deleteUser} from "firebase/auth";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const user = auth.currentUser
  if(user){
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
  
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
    console.log(displayName , email , photoURL , emailVerified , uid )
  }
  else{
    console.log("None")
  }

  const signIn = async () => {
          createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        console.log(user , userCredential.uid)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode , errorMessage)
        });

  };

  const signInWithGoogle  = async () => {
    try {
        const user = await signInWithPopup(auth, googleLogin); 
        console.log(user)
    } catch (error) {
      console.log(error);
    }
  }

  const signout = async () => {
    try {
     const user =  await signOut(auth);
     console.log(user)
    } catch (error) {
      console.log(error);
    }
  };

const delUser= async()=>{
  const user = auth.currentUser;

  deleteUser(user).then(() => {
    // User deleted.
  }).catch((error) => {
    // An error ocurred
    // ...
  });
}

  return (
    <div>
      <input
        placeholder="Email...."
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        placeholder="Password...."
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={signIn}>Sign In</button>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
      <button onClick={signout}>Log Out</button>
      <button onClick={delUser}>Delete user</button>
    </div>
  );
}

export default Auth;