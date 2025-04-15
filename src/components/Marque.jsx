import React from 'react'
import {motion} from "framer-motion"

function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full h-[50vh] pt-20 text-white bg-green-800 ' >
        <div className='text border-t-2  border-b-2 border-gray-300 flex gap-10 pb-2 whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:5}} className='text-[17vw] leading-none font-semibold'>WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:5}} className='text-[17vw] leading-none font-semibold'>WE ARE OCHI</motion.h1>
        </div>
      
    </div>
  )
}

export default Marque
