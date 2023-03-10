import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
    const {Component} = props;
    const navigate = useNavigate()
    useEffect(() => {
      let login = localStorage.getItem('user');
      console.log(login,"login");
      if(!login){
        navigate('/auth/sign-In')
      }
    }, [])

  return (
    <div>
        <Component/>
    </div>
  )
}

export default Protected