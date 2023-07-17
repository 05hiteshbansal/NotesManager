import React , {useEffect} from 'react'

const Protected = (props) => {
  const {Component} = props

useEffect(() => {
  
}, [])


    return (
        <>
    <Component/>
    </>
  )
}

export default Protected