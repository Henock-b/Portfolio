"use client";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "../../components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarketAlt, FaMapMarkerAlt} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(215)885-2658",
  },
  {
    icon: <FaEnvelope />,
    title: "email",
    description: "youremail@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: "address",
    description: "Code Corner, Tech Town 13579",
  },

];

import { easeIn, motion } from "framer-motion";
import { SelectGroup } from "@radix-ui/react-select";

const Contact = () => {
  return (
    <motion.section 
    initial={{ opacity: 0 }}
    animate= {{ opacity: 1,
    transition: {delay: 1.0, duration: 0.4, ease: "easeIn"},
    }}
    className="py-6"
    >
    <div className="container mx-auto">
      <div>
        {/* form */}
        <div className="xl:h[54%] order-2 xl:order-none">
          <form className="flex-1 flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Let's work together</h3>
            <p className="text-white/60">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet atque dolore porro itaque ad minus dicta, </p>
            {/* input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="firstname" placeholder="Firstname"  />
              <input type="lastname" placeholder="Lastname"  />
              <input type="email" placeholder= "Email address"  />
              <input type="phone" placeholder="Phone number"  />
            </div>
           {/* select */}
           <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service"/>
            </SelectTrigger>
          
           <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a service</SelectLabel>
              <SelectItem value="est">Web Development</SelectItem>
              <SelectItem value="cst">UI/UX Design</SelectItem>
              <SelectItem value="mst">Logo Design</SelectItem>
            </SelectGroup>
           </SelectContent>
           </Select>
           <Textarea className="h-[200px]" placeholder="Type your message here" />
           {/* btn */}
           <Button size="md" className="max-w-40">Send Message</Button>
          </form>
        </div>
        {/* info */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index)=> {
              return (
              <li key={index} className="flex flex-col gap-10">
                <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#24242c] text accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div>
                  <p>{item.title}</p>
                  <h3>{item.description}</h3>
                </div>
              </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
      
      </motion.section>
  )
}

export default Contact