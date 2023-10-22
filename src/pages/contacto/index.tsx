import React from 'react'
import { motion } from 'framer-motion'
import headerImage from "../../../public/images/header.jpg"
import Image from 'next/image'
import Footer from '@/components/Layout/Footer'
import ContactForm from '@/components/ContactForm/ContactForm'
import ContactData from '@/components/ContactForm/ContactData'

export default function ContactPage(props:any) {

  return (
    <motion.main
        className={` min-h-screen overflow-y-hidden`}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
        <div className='w-full '>
          <div className='relative h-64 w-full flex justify-center '>
            <div className='relative z-20 pt-24 w-3/4'>
              <h1 className={` text-xl md:text-3xl font-semibold text-center text-white`}>
                {props.contactData.title}
              </h1>
            </div>
            <Image
              className='brightness-50'
              src={headerImage}
              alt='imagen del servicio' 
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </div>

          <div className='px-10 pb-10 mt-2 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10'>
              {/* Informacion sobre Martin */}
              <ContactData contactData={props.contactData}/>
              {/* Formulario */}
              <ContactForm data={props.contactData}/>
          </div>
        </div>
      <Footer data={props.footerData}/>
    </motion.main>
  )
}

export async function getStaticProps({locale}:any) {

  const response = await import (`../../lang/${locale}.json`)
  
  return {
    props: {
      contactData: response.default.contact,
      footerData: response.default.footer
    }
  }
}
