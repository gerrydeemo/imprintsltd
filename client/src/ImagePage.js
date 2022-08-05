
import "./Image.css"
import Navbar from './Navbar'
import {useEffect, useState,Fragment} from 'react'
import {motion} from "framer-motion"
import { GalleryData } from "./GalleryData";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
function ImagePage() {
    const [selectionValue, setSelectionValue] = useState("Select A Catagory")
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
    setSelectionValue(item)
    setChange(true);
  }
  const galAllFilt = () => {
    setData(GalleryData)
    setSelectionValue("All")
    setChange(true);
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className=" bg-black w-screen h-screen overflow-x-hidden overflow-y-scroll">
    <Navbar pageNumber={3} styleNav={"xl:relative lg:relative "}/>
    <div className="w-full">
      <div className="py-5 px-10">
        <div className="filterItem">
        <div className="justify-center flex ">
        <Menu as="div" className=" inline-block text-center relative w-full z-20 xl:hidden lg:hidden md:hidden sm:flex">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-[#2f2f2f] shadow-sm px-4 py-2 bg-[#2f2f2f]  font-medium text-white hover:bg-[#2f2f2f] ">
          <h1 className="capitalize font-bold ">{selectionValue}</h1>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right w-full z-20 absolute right-0 mt-1  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="py-1 z-20">
          <Menu.Item>
          <div onClick={()=> galAllFilt()} className=" bg-white text-black z-20 py-3">All</div>
          </Menu.Item>
          {
              collection.map((item)=> 
            <Menu.Item>
              {({ active }) => (
                
                <div
                  onClick={()=>{galFilt(item)}}
                  className="bg-white text-black z-2 capitalize py-3"
                >
                  {item}
                </div>
              )}
            </Menu.Item>)
            }
           
           </div>
           
        </Menu.Items>
      </Transition>
    </Menu>
        </div>
          <div className="xl:flex lg:flex sm:hidden supersmall:hidden md:flex">
          <ul className="lg:flex xl:flex md:grid md:grid-cols-3 align-center justify-center list-none p-0 gap-2.5 mb-10">

            <li><button onClick={()=> galAllFilt()} className=" text-white py-3 px-16 uppercase  text-lg rounded-xl hover:bg-[#222] cursor-pointer">All</button></li>
            

            {
              collection.map((item)=> <li><button className=" text-white py-3 px-10 uppercase text-lg rounded-xl hover:bg-[#222] cursor-pointer" onClick={()=>{galFilt(item)}}>{item}</button></li>)
            }
          </ul>
          </div>
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