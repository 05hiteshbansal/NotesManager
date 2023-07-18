import React, { useState, useEffect } from "react";
import { auth, googleLogin } from "../config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  deleteUser,
} from "firebase/auth";
//import { useNavigate } from "react-router-dom";

//import { useSelector, useDispatch } from 'react-redux'
//import { userInfo } from '../redux/counter/counterSlice'

// export function Counter() {
//   const count = useSelector((state) => state.counter.value)
//   const dispatch = useDispatch()
// }

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      // Navigate('/notes');
    }
     else 
     {
      console.log("None");
     }
  }, [user1]);

  const signIn = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, userCredential.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

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
