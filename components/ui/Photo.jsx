"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import henockb from "@/public/henockb.jpg"



const Photo = () => {
  return (
    <div className=" w-full h-full relative " >
        {/* image */}
        <motion.div 

        initial={{opacity: 0}} 
        animate={{
          opacity: 1, 
          transition: {delay: 2, duration: 0.4, ease: "easeIn"},
          }}
          >
            <motion.div
            initial={{opacity: 0}} 
            animate={{
              opacity: 1, 
              transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"},
            }}
             className="w-[350px] h-[350px] xl:w-[498px] xl:h-[498px] absolute ">
                <Image src={henockb} 
                priority 
                quality={100} 
                width={400}
                height={400}
                alt=""
                className="rounded-full aspect-square object-cover " 
                style ={{
                  borderRadius: "50%",
                  overflow: "hidden",
               }}
                />
        </motion.div>
          {/* circle */}
          <motion.svg 
          className="w-[440px] xl:w[440px] h-[200px] xl:h-[440px] inherit"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://wwww.w3.org/2000/svg"
          >
            <motion.circle
            cx="230"
            cy="230"
            r="235"
            stroke="#00ff99"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "30 10 0 0"}}
            animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse "
            }}
             />
          </motion.svg>
        </motion.div>
    </div>
  );
};

export default Photo;