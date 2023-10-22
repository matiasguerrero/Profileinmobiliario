import React from 'react'
import { Merriweather,Inter } from 'next/font/google'
import Image, { StaticImageData } from 'next/image'
import {PrimaryButton} from '@/components/Buttons/PrimaryButton'
import edificioImage from "../../../../public/images/edificio.jpg"
import { BathIcon, BedIcon, LocationIcon, RulerIcon } from '@/components/Icons'
import SectionWraper from '@/components/Layout/SectionWraper'
import { SwiperSlide, Swiper } from "swiper/react";
import TitleSection from '@/components/Layout/TitleSection'

interface OfertData {
    id: number
    title: string
    image: StaticImageData
    location: string
    rooms: number
    baths: number
    metros: number
    price: string
  }
  
  
  
  const OfertList = [
    {
      id: 1,
      title: "Pasteur House",
      image: edificioImage,
      location: "Barcelona, España",
      rooms: 3,
      baths: 3,
      metros: 600,
      price: "200.000"
    },
    {
      id: 2,
      title: "Mario Residence",
      image: edificioImage,
      location: "Sevilla, España",
      rooms: 3,
      baths: 3,
      metros: 600,
      price: "300.000"
    },  
    {
      id: 3,
      title: "Another Residence",
      image: edificioImage,
      location: "Alguero, Italia",
      rooms: 3,
      baths: 3,
      metros: 600,
      price: "400.000"
    },
    {
      id: 4,
      title: "Pasteur House",
      image: edificioImage,
      location: "Alguero, Italia",
      rooms: 3,
      baths: 3,
      metros: 600,
      price: "400.000"
    },
    {
      id: 5,
      title: "Pasteur House",
      image: edificioImage,
      location: "Alguero, Italia",
      rooms: 3,
      baths: 3,
      metros: 600,
      price: "400.000"
    },
    {
      id: 6,
      title: "Pasteur House",
      image: edificioImage,
      location: "Alguero, Italia",
      rooms: 3,
      baths: 3,
      metros: 600,
      price: "400.000"
    },
  ]

export default function OfertSection() {


    // const Ofert: React.FC<OfertData> = ({id, image, location, rooms, baths, metros, price}) => {
    //     return (
    //       <div className='border-2 max-w-md cursor-grab flex flex-col items-center text-center w-full overflow-hidden'>
            
    //         {/* Header Card */}
    //         <div className='relative overflow-hidden w-full object-cover h-44 md:h-80 ' >
    //           <Image
    //             src={image}
    //             alt='Asd' 
    //             // className='object-cover'        
    //             layout="fill"
    //             objectFit="cover"
    //             objectPosition="center"/> 
    //         </div>

    //         {/* Footer Card */}
    //         <div className='bg-white flex flex-col items-start px-4 py-5 w-full gap-4'>
    //           <div className='flex gap-2'>
    //             <LocationIcon/>
    //             <h4 className='font-medium text-lg md:text-lg'>{location}</h4>
    //           </div>
    //           <div className='flex gap-4  font-medium text-xs md:text-lg'>
    //             <div className='flex items-center'>
    //                 <BedIcon/> 
    //                 <p>{rooms} Hab</p>
    //             </div>
    //             <div className='flex items-center'>
    //                 <BathIcon/> 
    //                 <p>{baths} Baños</p>
    //             </div>
    //             <div className='flex items-center'>
    //                 <RulerIcon/> 
    //                 <p>{metros} m2</p>
    //             </div>
    //             </div>

    //         </div>
    //       </div>
    //     )
    // }

    const Ofert: React.FC<OfertData> = ({id, image, title, rooms, baths, metros, price}) => {
      return (
        <div className=' max-w-md cursor-grab flex flex-col w-full overflow-hidden'>
          <h4 className='font-medium text-lg md:text-lg'>{title}</h4>

          {/* Header Card */}
          <div className='relative overflow-hidden w-full object-cover h-44 md:h-80 ' >
            <Image
              src={image}
              alt='Asd' 
              // className='object-cover'        
              layout="fill"
              objectFit="cover"
              objectPosition="center"/> 
          </div>

          {/* Footer Card */}
          <div className='mt-2 w-3/4'>
            <PrimaryButton mode='dark'>Ver más</PrimaryButton>
          </div>
        </div>
      )
  }
    

  return (
    <div className='py-10 '>
      <div className=' px-5 container mx-auto'>

        <TitleSection content='Oportunidades inmobiliarias' alignment='start' subtitle='texto sobre oportunidades'/>
      </div>
      <Swiper
        spaceBetween={20}
        className='pl-10 md:pl-28 mt-10'
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          450: {
            slidesPerView: 2.5,
          },
          720: {
            slidesPerView: 3.5,
          },
          960: {
            slidesPerView: 3.5,
          },
          1200: {
            slidesPerView: 4.5,
          },
        }}
      >
        {OfertList.map((ofert) => (
          <SwiperSlide key={ofert.id}>
          <Ofert {...ofert}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  )
}
