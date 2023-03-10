import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const IsLogedIn = (props) => {
    const {Component} = props;
    const navigate = useNavigate()
    useEffect(() => {
      // debugger
      let login = localStorage.getItem('user');
      if(login){
        navigate('/dashboard/home')
      }
    }, [])

  return (
    <div>
        <Component/>
    </div>
  )
}

export default IsLogedIn