import { CheckIcon, EmailIcon, LocationIcon, LogoIcon, PhoneIcon } from '@/components/Icons'
import TitleSection from '@/components/Layout/TitleSection'
import React, { useState } from 'react'
import emailjs from "emailjs-com";
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm/ContactForm';
import ContactData from '../ContactForm/ContactData';

export default function ContactSection({data}:any) {
  const [contact, setContact] = useState({ userName:"", userEmail: "", message:"" });
  const [sendMessageSuccess, setSendMessageSuccess] = useState(false);
  const [sendMessageLoading, setSendMessageLoading] = useState(false);

  const inputClassname = "rounded-xl mt-2 px-2 py-2 text-xl bg-[#ededed] focus:outline-none "

  const handleChange = (e:any) => { 
		const {name,value} = e.target;
		setContact({...contact,[name]:value}); 
   };

  const handleSubmit = (event:any) => {
    event.preventDefault()
    setSendMessageLoading(true)

    emailjs.send("default_service", "template_7z09dl6", contact, "yKZW2OzLPewEgy9nB")
		.then((response) => {
			// console.log("SUCCESS!", response.status, response.text);
      setSendMessageSuccess(true)
      setTimeout(() => {
        setSendMessageSuccess(false)
      }, 2000);
      setSendMessageLoading(false)
		}, 
    (err) => {
			console.log("FAILED", err);
		});
  }

  return (
        <>
          <TitleSection 
            content={data.title}
            alignment='center' 
          />
          <div className=' pb-10 mt-2 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10'>
            <ContactData  contactData={data}/>
            {/* Formulario */}
            <ContactForm data={data}/>
          </div>
        </> 
  )
}
