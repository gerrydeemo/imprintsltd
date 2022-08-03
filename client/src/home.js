import React from 'react'
import Navbar from './Navbar'
import {Carousel} from "./Components/Carousel"
import {motion} from "framer-motion"
function home() {
  return (
    <div className='w-screen h-screen bg-black'>
      <Navbar pageNumber={1}/> 
       
       <div className="centerScroll h-full w-full">
            <Carousel/>
            <div className='justify-center flex h-full w-full  items-center'>
            <motion.img  src="/assets/logo.png"  transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeatDelay: 2
      }}  animate={{
      scale: [3, 1, 1, 0.8, 0.8],
      rotate: [0, 0, 360, 360, 0],
      borderRadius: ["50%", "30%", "20%", "30%", "50%"],
    }} className=" bg-[#0b0b0b] shadow-xl w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 -mt-20 shadow-red-900 cursor-pointer "/>
       </div> 
       </div>   
    </div>
  )
}

export default home