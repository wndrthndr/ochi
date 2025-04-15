import React from "react";
import { motion, useAnimation } from "framer-motion";

function Space() {
  const cards = [useAnimation(), useAnimation()];

  const handlehover = (index) => {
    cards[index].start((i) => ({
      y: "0%",
      transition: { ease: "easeIn", delay:index* 0.05 },
    }));
  };

  const handlehoverend = (index) => {
    cards[index].start((i) => ({
      y: "100%",
      transition: { ease: "easeOut", delay: index* 0.05 },
    }));
  };

  return (
    <div className="w-full h-[50vw] px-20 py-20 flex gap-30 items-center justify-center bg-gray-300">
      {/* Card 1 */}
      <motion.div
        onHoverStart={() => handlehover(0)}
        onHoverEnd={() => handlehoverend(0)}
        className="w-1/2 h-[35vw] relative gap-10 bg-amber-50"
      >
        <h1 className="absolute flex overflow-hidden left-full font-bold text-6xl z-[9] text-green-400 -translate-x-1/2 -translate-y-1/2 top-1/2">
          {"TEXT1".split("").map((item, index) => (
            <motion.span
              key={index}
              custom={index}
              initial={{ y: "100%" }}
              animate={cards[0]}
              className="inline-block"
            >
              {item}
            </motion.span>
          ))}
        </h1>
        <div className="w-full h-full scale-90 bg-green-50"></div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        onHoverStart={() => handlehover(1)}
        onHoverEnd={() => handlehoverend(1)}
        className="w-1/2 h-[35vw] relative gap-10 bg-amber-50"
      >
        <h1 className="absolute right-full flex overflow-hidden font-bold text-6xl z-[9] text-red-400 translate-x-1/2 -translate-y-1/2 top-1/2">
          {"TEXT2".split("").map((item, index) => (
            <motion.span
              key={index}
              custom={index}
              initial={{ y: "100%" }}
              animate={cards[1]}
              className="inline-block"
            >
              {item}
            </motion.span>
          ))}
        </h1>
        <div className="w-full h-full scale-90 bg-green-50 overflow-hidden"></div>
      </motion.div>
    </div>
  );
}

export default Space;
