import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home'
import About from "../pages/about/About";
import NotFound from "../pages/not-found/NotFound";
import Details from "../pages/details/Details";

const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default AppRouter
