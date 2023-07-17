import React , {useEffect} from 'react'
import { auth} from "../config/firebaseConfig";

const Protected = (props) => {
  const {Component} = props

useEffect(() => {
  console.log(auth.currentUser)
}, [auth.currentUser])


    return (
        <>
    <Component/>
    </>
  )
}

export default Protected