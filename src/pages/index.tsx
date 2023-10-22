import { Logo, LogoIcon } from '@/components/Icons'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const container = {
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.4,
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    // transition: {
    //   delay: 1.1
    // } ,
  },
}

export default function Home() {

  const router = useRouter()
  
  useEffect(() => {
    setTimeout(() => {
      router.push("/inicio")
    }, 2500);
  }, [])


  return (
    <motion.div exit={{ opacity: 0}} className=' fixed z-50 flex bg-white h-screen w-full justify-center items-center '>
      <motion.div 
        exit={{ scale: 0}}
      >
        <motion.div className='flex items-center flex-col'>
          <motion.div className='mb-2'
            initial={{ opacity: 0, scale: 0, y: 50}} 
            animate={{opacity: 1, scale: 1, y: 0}} 
            transition={{
              duration: 0.6,
              y: { type: 'spring', stiffness: 100,  delay: 1 }, // Agregando delay a la animación en Y
              opacity: { duration: 0.8 }
            }}
          >
            <LogoIcon color='#000'/>
          </motion.div>
          <div className=' overflow-hidden'>

          <motion.div 
            className='flex flex-col items-center'
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className='text-3xl font-semibold'>Martin Mariotti</motion.div>
            <motion.div variants={item} className='uppercase text-secondary text-sm '>Personal shopper inmobiliario</motion.div>
          </motion.div>
          </div>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}
