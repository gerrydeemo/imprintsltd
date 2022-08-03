import React,{useEffect, useState} from 'react'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom';
function PopAnim() {
    const navigate = useNavigate()
    


    setTimeout(() => {
        navigate("/home")
    }, 3500);


  return (
    <div className='items-center flex justify-center w-screen h-screen bg-black'>
    <motion.img src="/assets/logowithouttext.png"  initial={{opacity:0}} animate={{ rotateX: 360, rotateZ:360, rotateY:360, opacity:1 }} transition={{ duration: 3}} />

    </div>
  )
}

export default PopAnim