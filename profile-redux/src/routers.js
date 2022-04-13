import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { apiAuth } from "./api";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Profile from "./pages/profile/Profile";

function Routers() {

  useEffect(() => {
    const getToken = localStorage.getItem('token')
    if(getToken){
      apiAuth.defaults.headers.common['Authorization'] = getToken;
    }
  },[])

  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routers;
