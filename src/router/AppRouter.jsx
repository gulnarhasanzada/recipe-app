import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home'
import About from "../pages/about/About";
import NotFound from "../pages/not-found/NotFound";

const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    
    </>
  )
}

export default AppRouter
