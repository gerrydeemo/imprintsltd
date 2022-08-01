import React,{useEffect, useState} from 'react'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom';
function PopAnim() {
    const navigate = useNavigate()
    


    setTimeout(() => {
        navigate("/home")
    }, 3500);


  return (
    <div className='translate-y-1/4 flex justify-center'>
    <motion.img src="/assets/logowithouttext.png" className='pt-48' initial={{opacity:0}} animate={{ rotateX: 360, rotateZ:360, rotateY:360, opacity:1 }} transition={{ duration: 3}} />

    </div>
  )
}

export default PopAnim