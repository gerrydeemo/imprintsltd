import React,{useState, useEffect} from 'react'
import Navbar from './Navbar'
import {motion} from "framer-motion"
function VideoPage() {

  return (
    
    <div className='bg-black w-screen h-screen overflow-y-scroll overflow-x-hidden '>
        <Navbar pageNumber={4} styleNav={"xl:relative lg:relative"}/>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="w-full h-full mt-10 flex justify-center">

        <div className="grid  lg:grid-cols-2 md:grid-cols-1 w-3/4 sm:grid-cols-1 xl:grid-cols-2 h-full gap-5">
            <iframe className='w-full h-full'  src="https://www.facebook.com/plugins/video.php?height=316&href=https%3A%2F%2Fwww.facebook.com%2Fhouseandsurroundslisburn%2Fvideos%2F1886645264871748%2F&show_text=false&width=560&t=0" ></iframe>
            <iframe className='w-full h-full' src="https://www.facebook.com/plugins/video.php?height=316&href=https%3A%2F%2Fwww.facebook.com%2Fhouseandsurroundslisburn%2Fvideos%2F1886645264871748%2F&show_text=false&width=560&t=0" ></iframe>
            <iframe className='w-full h-full' src="https://www.facebook.com/plugins/video.php?height=316&href=https%3A%2F%2Fwww.facebook.com%2Fhouseandsurroundslisburn%2Fvideos%2F1886645264871748%2F&show_text=false&width=560&t=0" ></iframe>
            <iframe className='w-full h-full' src="https://www.facebook.com/plugins/video.php?height=316&href=https%3A%2F%2Fwww.facebook.com%2Fhouseandsurroundslisburn%2Fvideos%2F1886645264871748%2F&show_text=false&width=560&t=0" ></iframe>
            </div>


        </motion.div>
    </div>
    
 
    )

}

export default VideoPage