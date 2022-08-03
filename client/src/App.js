
import Navbar from "./Navbar"
import PopAnim from "./PopAnim.js" 
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import Home from "./home.js"
import About from "./about"
import React,{useEffect, useState} from 'react';
import ImagePage from "./ImagePage"
import VideoPage from "./VideoPage"
import Contact from "./Contact"
function App() { 
   
  return (

      <Router>
      <Routes>
          <Route exact path="/" element={<PopAnim/> }/>
          <Route exact path="/home" element={<Home/> }/>
          <Route exact path="/about" element={<About/>}/>
        <Route exact path="/images" element={<ImagePage/>}/>

      <Route exact path="/videos" element={<VideoPage/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
      </Router>

  );
}

export default App;
