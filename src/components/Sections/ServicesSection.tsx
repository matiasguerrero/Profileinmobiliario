import TitleSection from '@/components/Layout/TitleSection'
import React from 'react'
import { ServiceList } from '@/db/Services'
import { AdvantageList } from '@/db/Advantages'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Service } from '@/db/Services'
import { SwiperSlide, Swiper } from "swiper/react";
import ServiceImage1 from "@/../public/images/servicesImage1.jpg"
import ServiceImage2 from "@/../public/images/servicess2.jpg"
import ServiceImage3 from "@/../public/images/llavesEnMano.jpg"
import { CheckIcon } from '@/components/Icons'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  }
}

const serviceVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring"
    }
  },
}

const MostrarProceso = (data:any) => {

  const ServiceBox = ({title, image, subtitle}:Service) => (
    <motion.div                   
      className="flex flex-col justify-between"
      variants={serviceVariant}
    >

      <div className='mb-3 pt-1'>
        <div className='inline rounded-full text-black border border-black px-3 py-1 font-medium text-sm'>
          {subtitle}
        </div>
      </div>
      {/* Image */}
      <motion.div 
        className='relative w-full h-64  rounded-2xl overflow-hidden'
      >
        <Image
          src={image}
          alt='imagen del servicio' 
          layout="fill"
          objectFit="cover"
          quality={100} 
        />
      </motion.div>
      {/* Titulos de los servicios, debajo de las imagenes
      <div className='py-3 px-3'>

        <p className='mt-0 text-xl font-semibold'>{title}</p>
      </div>
      */}
  </motion.div>
  )

  return (
    <>
    <h2 className='font-medium md:text-xl'>
    {data.subtitle2}
    </h2>
    <div>
      <Swiper
        spaceBetween={20}
        breakpoints={{
        0: {
          slidesPerView: 1.2,
        },
        450: {
          slidesPerView: 1.5,
        },
        720: {
          slidesPerView: 3,
        },
        960: {
          slidesPerView: 3.5,
        },
        1200: {
          slidesPerView: 4,
        },
    }}
  >
    {data.proccess.map((item:any, index:number) => (
      <SwiperSlide key={item.title} index={index} {...item}>
          <ServiceBox  index={index} title={item.title} subtitle={item.subtitle} image={ServiceList[index].image}/>
      </SwiperSlide>
    ))}
      </Swiper>
    </div>
  </>
  )
}

const MostrarVentajas = (data:any) => (
    <>
    <p className='text-secondary text-md md:text-xl mt-5 text-center'>
      {data.subtitle3}
    </p>
    <div className='flex flex-col items-center w-full gap-10 mb-10'>
      <div className='text-center md:text-center w-full'>
      <h2 className='font-semibold text-lg md:text-3xl'>{data.advantage_title}</h2>
      </div>
      <motion.div 
        initial={{opacity: 0, x: -50}}
        whileInView={{ opacity: 1, x: 0}}
        transition={{ duration: 1,}}
        viewport={{ once: true }}
        className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-5 md:mt-0'
      >
        {data.advantages.map((item:any, index:number) => (
          <div key={item.title} className=" py-7 px-5 bg-white rounded-3xl shadow-lg flex flex-col gap-3 ">
          <div>{AdvantageList[index].icon}</div>
          <h3 className='font-bold text-xl mt-4'>{item.title}</h3>
          <p className='text-secondary text-sm'>{item.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
    </>
)

const MostrarImagenes = () => (
  <div className='hidden md:grid grid-cols-2 gap-3 '>
    <div className="grid grid-rows-2 gap-3" >
      <div className='relative rounded-2xl overflow-hidden '>
      <Image 
        src={ServiceImage3} 
        alt='Manos de una mujer con llaves de una casa' 
        layout="fill"
        objectFit="cover"
        quality={100}/>
      </div>
      <div className='relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0000001a]'>
      <Image 
        src={ServiceImage2} 
        alt='Imagen de una casa' 
        layout="fill"
        objectFit="cover"
        quality={100}/>
      </div>
    </div>
    <div className=' overflow-hidden relative border-2 rounded-2xl shadow-2xl shadow-[#0000001a]'>
      <Image 
        src={ServiceImage1} 
        alt='Imagen de una casa' 
        layout="fill"
        objectFit="cover"
        quality={100}/>
    </div>
  </div>
)

export default function ServicesSection({data}:any) {
  
  return (
      <div className='flex flex-col gap-12 pt-14'>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div>
            <TitleSection
              content={data.title}
              alignment={"start"} 
            />
            <div className='mt-6'>
              <h2 className='font-medium md:text-xl'>
                {data.subtitle}
              </h2>
              <ul className='list-disc mt-5 md:text-lg'>
                {data.services.map((item:string, index:number) => (
                  <li key={item} className='flex items-center gap-3 '>
                    <CheckIcon/>
                    <p className=''>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
            {MostrarImagenes()}
        </div>

      {MostrarProceso(data)}

      {MostrarVentajas(data)}
      </div>


  )
}
