"use client";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {FormEvent , useState } from "react";




import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "../../components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

const info = [
 
  {
    icon: <FaEnvelope />,
    title: "email:",
    description: "henockbdev@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: "address:",
    description: "Wilkes-Barre, PA 18702",
  },

];

import { easeIn, motion } from "framer-motion";
import { SelectGroup } from "@radix-ui/react-select";


const Contact = () => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault()
    
   
  try {
    const res = await fetch ("/app/pages/api/contact", {
      method: 'POST',
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        phone,
        service,
        message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      // Handle successful submission
      console.log('Form submitted successfully!');
    } else {
      // Handle submission errors
      console.error('Form submission failed.');
    }
 } catch (error) {
    console.error('An error occurred:', error);
  }

    // Reset form fields after submission
    setFirstname("");
    setLastname("");
    setEmail("");
    setPhone("");
    setService("");
    setMessage("");
    alert("Your message has been sent successfully!");
  };


  return (

   <motion.section 
    initial={{ opacity: 0 }}
    animate= {{ opacity: 1,
    transition: {delay: 1.0, duration: 0.4, ease: "easeIn"},
    }}
    className="py-6"
    >
    <div className="container mx-auto ">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        {/* form */}
        <div className="xl:w-[54%] order-2 xl:order-none">
          <form onSubmit={onSubmit} className="flex-1 flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Let's work together</h3>
            <p className="text-white/60">Learning and building new projects is a passion of mines.  </p>
            {/* input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <input
              value={firstname} onChange={(e) => setFirstname(e.target.value)}
              type="firstname" placeholder="Firstname"  />
              <input 
               value={lastname} onChange={(e) => setLastname(e.target.value)}
              type="lastname" placeholder="Lastname"  />
              <input
               value={email} onChange={(e) => setEmail(e.target.value)}
              type="email" placeholder= "Email address"  />
              <input
               value={phone} onChange={(e) => setPhone(e.target.value)}
              type="phone" placeholder="Phone number"  />
            </div>
           {/* select */}
           <Select  onValueChange={(value) => setService(value)}>
            <SelectTrigger className="w-full my-8 ">
              <SelectValue placeholder="Select a service"/>
            </SelectTrigger>
          
           <SelectContent >
            <SelectGroup  >
              <SelectLabel >Select a service</SelectLabel>
              <SelectItem value="Web Development">Web Development</SelectItem>
              <SelectItem value="UI/UX">UI/UX Design</SelectItem>
              <SelectItem value="System Design">System Design</SelectItem>
            </SelectGroup>
           </SelectContent>
           </Select>
           <Textarea
           value={message} onChange={(e) => setMessage(e.target.value)}
           className="h-[200px]" placeholder="Type your message here" />
           {/* btn */}
           <Button  size="md" className="max-w-40 hover:bg-sky-700 my-8"  value={service} onChange={(e) => setService(e.target.value)} >Send Message</Button>
          </form>
        </div>
        {/* info */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index)=> {
              return (
              <li key={index} className="flex flex-col gap-10">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#24242c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-black">{item.title}</p>
                  <h3 className="text-xl">{item.description}</h3>
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