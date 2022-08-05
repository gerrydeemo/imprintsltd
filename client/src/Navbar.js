import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import {motion} from "framer-motion"
function Navbar({pageNumber, styleNav}) {
  const [displayNavbarMobile, setDisplayNavbarMobile] = useState(false)
  const navigate = useNavigate()
  if(pageNumber === 1) {

  }

  
  return (
    <>

    <div className={`w-full py-10 text-white font-bold flex ${styleNav} overflow-x-hidden`} >
      <div className='title text-left text-xl top-6 absolute left-10'>HOUSEANDSURROUNDS</div>

      <div onClick={() => setDisplayNavbarMobile(!displayNavbarMobile)}  className=' lg:hidden xl:hidden md:flex sm:flex supersmall:flex w-full absolute top-5'><motion.div initial={{rotateZ: 0, top:8}} animate={displayNavbarMobile ? {rotateZ: 45, top:15} : {rotateZ: 0, top:8}} className='w-8 top-2 h-0.5 absolute right-10 bg-white'></motion.div><motion.div initial={{opacity:1}} animate={displayNavbarMobile ? {opacity:0} : {opacity:1}} className='absolute right-10 w-8  h-0.5 bg-white top-4'></motion.div><motion.div initial={{rotateZ: 0, top:24}} animate={displayNavbarMobile ? {rotateZ: -45, top:15} : {rotateZ: 0, top:24}} className='absolute right-10 w-8 h-0.5 top-6 bg-white'></motion.div></div>
      <motion.div transition={{
      duration: 0.5,
    }}  
    initial={{x:-1000}}
    animate={displayNavbarMobile ? {
            x:0} : {
              
            }} className=" absolute lg:hidden xl:hidden md:block supersmall:block w-full h-full bg-black top-16 text-center justify-center items-cneter z-40 overflow-y-visible">
        <h1 onClick={() => navigate("/home")} className={pageNumber === 1 ? 'py-3 px-5 text-[#313335] transition cursor-pointer' : 'py-3 px-5 transition hover:text-[#98999A] cursor-pointer'}>Home</h1>
        <h1 onClick={() => navigate("/about")} className={pageNumber === 2 ? 'py-3 px-5 text-[#313335] transition cursor-pointer' : 'py-3 px-5 transition hover:text-[#98999A] cursor-pointer'}>About</h1> 
        <h1 onClick={() => navigate("/images")} className={pageNumber === 3 ? 'py-3 px-5 text-[#313335] transition cursor-pointer' : ' py-3 px-5 transition hover:text-[#98999A] cursor-pointer'}>Images</h1> 
        <h1 onClick={() => navigate("/videos")} className={pageNumber === 4 ? 'py-3 pb-5 px-5 text-[#313335] transition cursor-pointer' : 'py-3 pb-5 px-5 transition hover:text-[#98999A] cursor-pointer'}>Videos</h1>
        <button onClick={() => navigate("/contact")} className={pageNumber === 5 ? 'lg:flex transition xl:hidden md:flex sm:flex supersmall:flex sm:mx-auto supersmall:mx-auto px-9 py-1 mt-10 rounded-2xl text-lg font-bold  border-2   border-red-600 bg-black text-red-600' :'mt-10 bg-red-600 px-9 py-1 rounded-2xl text-lg font-bold text-black border-2  border-red-600 hover:border-red-600 hover:bg-black hover:text-red-600'}>Contact</button>
      </motion.div> 
      <div className=' text-center w-screen top-6 justify-center text-lg font-semibold flex absolute lg:flex xl:flex md:hidden sm:hidden supersmall:hidden'>
        <h1 onClick={() => navigate("/home")} className={pageNumber === 1 ? 'px-5 text-[#313335] transition cursor-pointer' : 'px-5 transition hover:text-[#98999A] cursor-pointer'}>Home</h1>
        <h1 onClick={() => navigate("/about")} className={pageNumber === 2 ? 'px-5 text-[#313335] transition cursor-pointer' : 'px-5 transition hover:text-[#98999A] cursor-pointer'}>About</h1> 
        <h1 onClick={() => navigate("/images")} className={pageNumber === 3 ? 'px-5 text-[#313335] transition cursor-pointer' : 'px-5 transition hover:text-[#98999A] cursor-pointer'}>Images</h1> 
        <h1 onClick={() => navigate("/videos")} className={pageNumber === 4 ? 'px-5 text-[#313335] transition cursor-pointer' : 'px-5 transition hover:text-[#98999A] cursor-pointer'}>Videos</h1>
        
      </div> 
      <button onClick={() => navigate("/contact")} className={pageNumber === 5 ? 'lg:flex transition xl:flex md:hidden sm:hidden supersmall:hidden absolute  px-9 right-10 top-4 py-2 rounded-2xl text-lg font-bold  border-2   border-red-600 bg-black text-red-600' :'lg:flex transition xl:flex md:hidden sm:hidden supersmall:hidden absolute bg-red-600 px-9 right-10 top-4 py-2 rounded-2xl text-lg font-bold text-black border-2  border-red-600 hover:border-red-600 hover:bg-black hover:text-red-600'}>Contact</button>
    </div>

    </>
  )
}

export default Navbar