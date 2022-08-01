import React from 'react'
import Navbar from './Navbar'
import {Carousel} from "./Components/Carousel"
import {motion} from "framer-motion"
function home() {
  return (
    <div className='w-full'>
      <Navbar pageNumber={1}/> 
       
       <div className="centerScroll w-full justify-center flex">
            <Carousel/>
            
            <motion.img src="/assets/logo.png"  transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeatDelay: 2
      }}  animate={{
      scale: [3, 1, 1, 0.8, 0.8],
      rotate: [0, 0, 360, 360, 0],
      borderRadius: ["50%", "30%", "20%", "30%", "50%"],
    }} className="mt-36 bg-[#0b0b0b] shadow-xl shadow-red-900 cursor-pointer"/>
       </div> 
         
    </div>
  )
}

export default home