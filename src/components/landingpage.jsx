import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
import {motion} from 'framer-motion';

function Landingpage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-blue-400 border-t-2'>
        <div className='textstructure mt-52 px-20'>
            {["We create","Eye Opening","presentations"].map((item,index)=>{
                return (<div className="masker">
                    <div className='w-fit flex items-end'>
                  {index === 1 && (
                    <motion.div className='mr-5 w-[8vw] rounded-md h-[5.7vw] ' initial={{width:0}} animate={{width:"8vw"}} transition={{ease: [0.75,0 ,0.24, 1] , duration:1}}></motion.div>
                  ) }
                <h1 className="font-['Founders_Grotesk'] mb-3 leading-[6vw] tracking-tighter font-semibold uppercase text-9xl">{item}</h1>
            </div>
            </div>)
            })}
            
        </div>
      <div className='border-t-[1px] border-blue-200 mt-32 flex justify-between items-center px-20 py-5'>
        {
            ["for public and private companies","for first time pitch"].map((item,index)=>
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>)
        }
        <div className='group start flex items-center gap-1 hover:gap-0 transition-all duration-300 ease-in-out scale-100 hover:scale-105'>
  <div className='px-4 py-2 border-[2px] text-xs border-blue-900 capitalize rounded-full cursor-pointer transition-all duration-300 ease-in-out group-hover:rounded-r-none group-hover:bg-blue-50 group-hover:border-0'>
    Start The Project
  </div>
  <div className='w-10 h-10 rounded-full border-[2px] border-blue-900 flex items-center pl-2.5 transition-all duration-300 ease-in-out group-hover:rounded-l-none group-hover:bg-blue-50 group-hover:border-0'>
    <span className='rotate-[45deg]'><FaArrowUp /></span>
  </div>
</div>

      </div>
    </div>
  )
}

export default Landingpage
