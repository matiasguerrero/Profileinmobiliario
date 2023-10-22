import React from 'react'
import { motion } from 'framer-motion'

export default function ServiciosPage() {
  return (
    <motion.main
        className={` min-h-screen overflow-y-hidden`}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
        <div className='h-screen bg-gray-200 flex justify-center items-center'> <p className='text-2xl'>Imagen Servicios</p></div>
    </motion.main>
  )
}
