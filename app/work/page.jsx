"use client";

import {motion} from 'framer-motion';
import React, { useState } from "react";
import comingsoon from "@/public/comingsoon.jpg";

import { Swiper, SwiperSlide, SwipeSlide } from "swiper/react";
import "swiper/css";



import {BsArrowUpRight, BsGithub } from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "../../components/ui/tooltip"

import Link from "next/link";
import Image from "next/image"
import WorkSliderBtns from '../../components/ui/WorkSliderBtns';



const projects = [
  {
    num:'01',
    category: "fullstack",
    title: 'Portfolio Website',
    description: 'Designed and developed a personal portfolio website to showcase my skills and projects.',
    stack: [{  name: "JavaScript"}, {name: "TypeScript"}, {name: "Node.js"}],
    image: '/',
    live: "#",
    github: "",
  },
  {
    num:'02',
    category: "fullstack",
    title: 'Web Application Security Scanner',
    description: 'This project is a web application security scanner that helps identify vulnerabilities in web applications.',
    stack: [{  name: "Python"}, {name: "SQL"}, ],
    image: <Image src={comingsoon} alt="coming soon" className="w-full h-full object-cover" />,
    live: "#",
    github: "",
  },


];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handlesSlideChange = (swiper) => {
    //get current slide index
    const currentSlideIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentSlideIndex]);
  }



  return (
   <motion.section 
   initial={{ opacity: 0}}
   animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
   className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"> 
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50px]">
            {/* outline num */}
            <div className="text-8xl leading-none font-extrabold   #4087e4">
              {project.num}
            </div>
            {/* project title */}
            <h2 className="text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize  ">{project.title} 
            </h2>
            {/* project description */}
            <p className="text-black #4087e4">{project.description}</p>
            {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index)=> {
                  return <li key={index} className="text-xl  text-accent">{item.name}
                  {/* remove the last comma */}
                  {index !== project.stack.length -1 && ","}
                  </li>
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4 ">
                {/* live project button */}
                <link href={project.live} />
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className= "w-[70px] h-[70px] rounded-full go-black/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-black text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                {/* github project button */}
                <link href={project.github} />
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className= "w-[70px] h-[70px] rounded-full go-white/5 flex justify-center items-center group">
                      <BsGithub className="text-black text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
              </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12'
          onSlideChange={handlesSlideChange}
          >
            {projects.map((project, index)=> {
              return <SwiperSlide key={index} className='w-full'>
                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                {/* overlay */}
                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                <div>
                  <Image src={comingsoon}/>
                </div>

                </div>
              </SwiperSlide>;
            })}
            {/* slider buttons */}
             <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
             btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all" />
          </Swiper>
        </div>
      </div>
      </div>
  </motion.section>
  );
}

export default Work