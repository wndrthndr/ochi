import React from "react";
import { motion } from "framer-motion";

function Space() {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full h-[30vw] px-20 py-20 flex gap-30 items-center justify-center bg-amber-300">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
            backgroundColor:"#fbbf24",
          }}
          className="bg-amber-200 w-[20vw] h-[10vw] p-5 rounded-md shadow-lg"
        />
      ))}
    </div>
  );
}

export default Space;
