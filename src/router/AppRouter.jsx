import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/home/Home';
import About from "../pages/about/About";
import NotFound from "../pages/not-found/NotFound";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import { useUserContext } from '../context/UserContextProvider';

const AppRouter = () => {
  const { user } = useUserContext();

  return (
      <Routes>
        <Route path="/" element={!user ? <Navigate to="/login" /> : <Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />}  />
        <Route path="*" element={<NotFound />} />
      </Routes>

  )
}

export default AppRouter;
