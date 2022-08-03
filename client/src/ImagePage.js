
import "./Image.css"
import Navbar from './Navbar'
import {useEffect, useState} from 'react'
import {motion} from "framer-motion"
import { GalleryData } from "./GalleryData";
function ImagePage() {
    const [data,setData] = useState([]);
    const [collection,setCollection] = useState([]);
    const [change, setChange] = useState(false);
  useEffect(()=>{
    setChange(true);
    setData(GalleryData);
    setCollection([... new Set(GalleryData.map((item)=> item.titile))])
  },[]) 

  const gallery_filter = (itemData) =>{
    const filterData = GalleryData.filter((item)=> item.titile == itemData);
    setData(filterData);
  }
  const galFilt = (item) => {
    gallery_filter(item);
    setChange(true);
  }
  const galAllFilt = () => {
    setData(GalleryData)
    setChange(true);
  }
  return (
    <div className="overflow-y-scroll bg-black w-screen h-screen overflow-x-hidden">
    <Navbar pageNumber={3} styleNav={"relative"}/>
    <div className="w-full">
      <div className="py-5 px-10">
        <div className="filterItem">
          <ul className="lg:flex xl:flex md:grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-3 align-center justify-center list-none p-0 gap-2.5 mb-10">
            <li><button onClick={()=> galAllFilt()} className=" text-white py-3 px-16 uppercase  text-lg rounded-xl hover:bg-[#222] cursor-pointer">All</button></li>
            

            {
              collection.map((item)=> <li><button className=" text-white py-3 px-10 uppercase text-lg rounded-xl hover:bg-[#222] cursor-pointer" onClick={()=>{galFilt(item)}}>{item}</button></li>)
            }
          </ul>
        </div>
        <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 xl:grid-cols-4 gap-5">
          {

           data.map((item)=> <div  key={item.id} className="galleryItem"><motion.img 
      transition={{
        duration: 0.5,      
        ease: "easeInOut",
                                        
      }} 
      initial={{scale: 0, opacity:0}} animate={change ? {scale: 1, opacity:100} : {scale:0, pacity:0}} className="relative rounded-lg w-full h-full object-cover" src={item.image  } /></div> )
    
          }
        </div>
      </div>
    </div>

  
</div>

  )
}

export default ImagePage