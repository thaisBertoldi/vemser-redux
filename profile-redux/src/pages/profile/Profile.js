import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const getToken = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    if(!getToken){
      navigate("/login")
    }
  },[])

  return (
    <div>Profile</div>
  )
}

export default Profile