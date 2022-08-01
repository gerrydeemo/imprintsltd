import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar({pageNumber}) {
  const navigate = useNavigate()
  if(pageNumber === 1) {

  }
  
  return (
    <div className='w-full py-5 px-20 text-white font-bold flex'>
      <div className='title text-left text-xl mt-2'>HOUSEANDSURROUNDS</div>
      <div className='centerItems text-center mt-2 -ml-20  w-full justify-center text-lg font-semibold flex'>
        <h1 onClick={() => navigate("/home")} className={pageNumber === 1 ? 'px-5 text-[#313335]  cursor-pointer' : 'px-5 hover:text-[#98999A] cursor-pointer'}>Home</h1>
        <h1 onClick={() => navigate("/about")} className={pageNumber === 2 ? 'px-5 text-[#313335]  cursor-pointer' : 'px-5 hover:text-[#98999A] cursor-pointer'}>About</h1> 
        <h1 onClick={() => navigate("/home")} className='px-5 hover:text-[#98999A] cursor-pointer'>Images</h1> 
        <h1 onClick={() => navigate("/home")} className='px-5 hover:text-[#98999A] cursor-pointer '>Videos</h1>
        
      </div> 
      <button className='bg-red-600 px-9 py-2 rounded-2xl text-lg font-bold text-black border-2  border-red-600 hover:border-red-600 hover:bg-black hover:text-red-600'>Contact</button>
    </div> 
  )
}

export default Navbar