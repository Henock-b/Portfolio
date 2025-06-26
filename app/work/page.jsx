"use client";

import {motion} from 'framer-motion';
import React, { useState } from "react";

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
    category: "frontend",
    title: 'Project 1',
    description: 'This is a description of project 1.',
    stack: [{  name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}],
    image: '/',
    live: "#",
    github: "",
  },
  {
    num:'02',
    category: "fullstack",
    title: 'Project 1',
    description: 'This is a description of project 1.',
    stack: [{  name: "next.js"}, {name: "Tailwind.css"}, {name: "Node.js"}],
    image: '/',
    live: "#",
    github: "",
  },
  {
    num:'03',
    category: "frontend",
    title: 'Project 3',
    description: 'This is a description of project 3.',
    stack: [{  name: "next.js"}, {name: "Tailwind.css"},],
    image: '/',
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
            {/* project category */}
            <h2 className="text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize  ">{project.category} project
            </h2>
            {/* project description */}
            <p className="#4087e4">{project.description}</p>
            {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index)=> {
                  return <li key={index} className="text-xl text-accent">{item.name}
                  {/* remove the last comma */}
                  {index !== project.stack.length -1 && ","}
                  </li>
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <link href={project.live} />
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className= "w-[70px] h-[70px] rounded-full go-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
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
                      <BsGithub className="text-white text-3xl group-hover:text-accent"/>
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
                  <Image/>
                </div>

                </div>
              </SwiperSlide>;
            })}
            {/* slider buttons */}

            <WorkSliderBtns />
          </Swiper>
        </div>
      </div>
      </div>
  </motion.section>
  );
}

export default Work