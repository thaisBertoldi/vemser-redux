import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
  const getToken = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    if(!getToken){
      navigate("/login")
    }
  },[])

  return (
    <div>Home</div>
  )
}

export default Home