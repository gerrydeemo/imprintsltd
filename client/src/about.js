import React,{useEffect, useState} from 'react'
import Navbar from './Navbar'

import {motion} from "framer-motion"
function About() {
  const [anim, setAnim] = useState(false)
  const [cardSelectOne, setCardSelectOne] = useState(false)
  const [cardSelectTwo, setCardSelectTwo] = useState(false)
  const [cardSelectThree, setCardSelectThree] = useState(false)
  const [playAboutAnim, setPlayAboutAnim] = useState(true)
  const [mobileWidth, setMobileWidth] = useState(false)
  const playwindow = () => {
    localStorage.setItem("pageNumber", "1")
   window.location.reload()
  }
  useEffect(() => {

    localStorage.getItem("pageNumber") === "1" ? setPlayAboutAnim(false) : setPlayAboutAnim(true)
    setTimeout(() => {
      localStorage.getItem("pageNumber") === "1" ? console.log("idk") : playwindow()

    }, 15000)
    if(window.innerWidth < 770) {
      setMobileWidth(true)
    } 
  },[])
  


  setTimeout(() => {
    setAnim(true)
  }, 5000);
  return (
    <>
    <div className='w-screen h-screen bg-black overflow-y-scroll'>
    <motion.div className={!playAboutAnim ? "w-full h-full" : "hidden"}>
        <Navbar pageNumber={2}/>
 
        <div className="xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 tablet:grid tablet:grid-cols-1 sm:grid-cols-1 sm:grid">

        <center>
        <motion.div
          initial={{
            
              opacity: 0,
              y:-200
            }}
            transition={{
              duration: 10,
              
            }}  
            animate={{

              opacity: 1,
              y:-200
                    }}
           className={mobileWidth ? 'mt-52 w-3/5' :'hidden'}
           >
            
            <img src="/assets/ashler.jpg" className='rounded-2xl object-cover right-5'/>
            <img src="/assets/conc.jpg" className='rounded-2xl object-cover mt-10 left-5'/>
           </motion.div>
           </center>
          <motion.div
          initial={{
              opacity: 0,
              y: -400

            }}
            transition={{
              duration: 2,
            }}  
            animate={{

              opacity: 1,

              y:-200
                    }}
           className={mobileWidth ? 'w-full h-full mt-44 tablet:h-screen tablet:absolute tablet:mt-72  tablet:top-1/2 sm:h-screen sm:absolute sm:top-1/2 supersmall:top-1/2 supersmall:h-screen supersmall:absolute' :'w-1/2 h-full mt-14 tablet:h-screen tablet:absolute tablet:mt-72  tablet:top-1/2 sm:h-screen sm:absolute sm:top-1/2 supersmall:top-1/2 supersmall:h-screen supersmall:absolute'}
           >
           <h1 className='text-white font-bold 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl text-xl text-center mb-2'> HOUSE & SURROUNDS </h1>
           <h1 className='text-red-500 font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl text-lg text-center mb-2 tracking-widest'> A little bit about us. </h1>
           <h1 className='text-white font-semibold 2xl:text-2xl xl:text-xl  lg:text-lg md:text-lg  text-md tracking-wider leading-8  text-center xl:px-28 lg:px-16 md:px-14 w-full  px-7 pt-5'>Here at House and Surrounds, we take special care to make sure our clients are provided with the best service. We pledge to give you an amazing, long lasting result. House and Surrounds believes in: Value for money, authenticity, attention to detail, outstanding customer service and happy satisfied, customers.</h1>
           </motion.div>



<div className={mobileWidth ? "hidden" : "absolute h-full w-full"}>
    <motion.img 
      initial={{
        opacity: 0,
        y: -1550
      }}
      transition={{
        duration: 2,
      }}  
      animate={{
        opacity: 1,
        y: 0
      }} 
      src="/assets/conc.jpg" className='2xl:right-80 2xl:mt-40 2xl:h-1/2 xl:h-1/3 lg:top-10 xl:right-56 mt-64 rounded-2xl active:z-10 lg:h-1/4 lg:right-40'

      />
    <motion.img 
    initial={{
      opacity: 0,
      y: -1550
    }}
    transition={{
      duration: 1,
    }}  
    animate={{
      opacity: 1,
      y: 0
    }} 
    src="/assets/aboutlondon.jpg" 
    className='2xl:h-1/2 xl:right-16 mt-80 xl:h-1/3 lg:top-10  rounded-2xl active:z-10 lg:h-1/4 lg:right-5'

    />
</div>


</div>


    



</motion.div>



{/*other page */}

    <motion.div className={playAboutAnim ? "w-full h-full" : "hidden"}>
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
         className='absolute z-4 w-full h-full bg-black justify-center flex' >
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
    </div>
    </>
  )
}

export default About