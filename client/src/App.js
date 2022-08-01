
import './App.css';
import Navbar from "./Navbar"
import PopAnim from "./PopAnim.js" 
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import Home from "./home.js"
import About from "./about"
import React,{useEffect, useState} from 'react';
function App() { 

//fjsdlf  
  return (
    <div className="bg-black w-screen h-screen">
      <Router>
      <Routes>
        <Route exact path="/" element={<PopAnim/> }/>
        <Route exact path="/home" element={<Home/> }/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
