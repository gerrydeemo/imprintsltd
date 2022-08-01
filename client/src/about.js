import React,{useEffect, useState} from 'react'
import Navbar from './Navbar'

import {motion} from "framer-motion"
function About() {
  const [anim, setAnim] = useState(false)
  const [cardSelectOne, setCardSelectOne] = useState(false)
  const [cardSelectTwo, setCardSelectTwo] = useState(false)
  const [cardSelectThree, setCardSelectThree] = useState(false)

  


  setTimeout(() => {
    setAnim(true)
  }, 5000);
  return (
    <motion.div className='w-full h-full'>
        <Navbar pageNumber={2}/>
        <motion.div className='w-full  h-full flex ' transition={{
      duration: 10,
    }}  
    initial={{opacity: 1, skewX: 0, skewY:0}}
    animate={anim ? {
      opacity: 0, skewX: 20, skewY:20
            } : {
              
            }}
   >
        <motion.div
          transition={{
          duration: 5,
        }}  
        initial={{opacity: 1}}
        animate={{

          opacity: 0
        }} 
         className='absolute z-4 w-full h-full bg-black justify-center flex'>
      <motion.h1 
        transition={{
          duration: 3,
        }}  
        initial={{opacity: 0}}
        animate={{

          opacity: 1
        }} 
        className='text-4xl text-red-700 font-extrabold h-1/2 mt-80 w-fit'
      >
      Meet our team
      </motion.h1>
      </motion.div>






        <div onMouseEnter={() => setCardSelectOne(!cardSelectOne)} onMouseLeave={() => setCardSelectOne(!cardSelectOne)} className={'w-1/3'} >
          <motion.img 
            src="/assets/man.jpg" 
            transition={{
              duration: 0.3,
              repeatDelay: 1
            }}  
            initial={{
              opacity: 0,
              x: 1550
            }}
            animate={anim ? {
              opacity: 1,
              x: 0
            } : {
              
            }}
            className={"bg-[#0b0b0b] shadow-xl shadow-red-900 cursor-pointer h-full"}
          />
          </div>
          <div onMouseEnter={() => setCardSelectTwo(!cardSelectTwo)} onMouseLeave={() => setCardSelectTwo(!cardSelectTwo)} className={'w-1/3'} >
            <motion.img
              src="/assets/man.jpg"
              transition={{
                duration: 0.8,
                repeatDelay: 1
              }}
              initial={{
                opacity: 0,
                x: 1750
              }}
              animate={anim ? {
              opacity: 1,
              x: 0
            } : {
              
            }}
              className="bg-[#0b0b0b] shadow-xl shadow-red-900 cursor-pointer h-full"
            />
          </div>

          <div onMouseEnter={() => setCardSelectThree(!cardSelectThree)} onMouseLeave={() => setCardSelectThree(!cardSelectThree)} className={'w-1/3'} >
            <motion.img
              src="/assets/man.jpg"
              transition={{
                duration: 1.4,
                repeatDelay: 1
              }}
              initial={{
                opacity: 0,
                x: 1950
              }}
              animate={anim ? {
              opacity: 1,
              x: 0
            } : {
              
            }}
              className="bg-[#0b0b0b] shadow-xl shadow-red-900 cursor-pointer h-full absolute"
            />
          </div>
          
      </motion.div>
    </motion.div>
  )
}

export default About