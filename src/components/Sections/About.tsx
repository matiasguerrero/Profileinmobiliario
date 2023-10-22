import TitleSection from '@/components/Layout/TitleSection'
import Image from 'next/image'
import React from 'react'
import Martin from "../../../public/images/martinabout.png"
import { Characteristics } from '@/components/Accordion/AccordionCharacteristics'
import { EnfoqueIcon, MisionIcon, ValoresIcon } from '@/components/Icons'
import { motion } from 'framer-motion'
import {PrimaryButton} from '@/components/Buttons/PrimaryButton'
import { useRouter } from 'next/router'

export interface CharacteristicsIconsProps {
  icon: React.ReactNode
}

const CaracteristicasIconos:CharacteristicsIconsProps[] = [
    {
      icon:  <EnfoqueIcon color='#c0ff3f'/>
    },
    {
      icon:  <ValoresIcon color='#c0ff3f'/>
    },
    {
      icon: <MisionIcon color='#c0ff3f'/>
    },
  ]

export default function AboutSection({data}:any) {
  const router = useRouter()

  return (
    <div >

      {/* Sobre mi */}
      <div className='grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-20'>
        {/* Imagen de Martin */}
        <motion.div
          initial={{opacity: 0, x: 50}}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ duration: 1,}}
          viewport={{ once: true }}
          className=' flex justify-center items-center order-2 md:order-1'
        >
          <Image className='h-full md:h-[400px] w-auto rounded-2xl' src={Martin} alt='agente inmobiliario'/> 
        </motion.div>
        {/* Texto sobre Martin */}
        <motion.div 
          initial={{opacity: 0, x: -50}}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ duration: 1,}}
          viewport={{ once: true }}
          className='order-1 md:order-2 flex flex-col justify-center items-start py-8 gap-5 text-base md:text-lg font-regular'
        >
        <TitleSection 
          content={data.title} 
          alignment='start' 
        />
          <p className=''>
            {data.text}
            {/* <br/> */}
          </p>
          <p className='hidden md:block'>
            {data.text2}
          </p>
        </motion.div>
      </div>

      {/* Caracteristicas Desktop */}
      <div className='hidden md:grid grid-cols-1 md:grid-cols-3	gap-3 mt-10'>
        {data.characteristics.map((item:any, index:number) => (
          <div key={item.title} className=" flex flex-col gap-3 py-6 px-5 items-center">
            <div>{CaracteristicasIconos[index].icon}</div>
            <h3 className={` text-lg font-bold`}>{item.title}</h3>
            <p className='text-sm md:text-base text-center text-white'>{item.description}</p>
          </div>
        ))}
      </div>
      
      {/* Caracteristicas Mobile */}
      <div className='block md:hidden mt-8 mb-10'>
        <Characteristics data={data.characteristics} icons={CaracteristicasIconos} />
      </div>
      
      <div className='mt-2 flex justify-center' onClick={() => router.push("/contacto")}>
        <PrimaryButton mode='dark'>{data.callToAction}</PrimaryButton>
      </div>
    </div>
  )
}
