import React from 'react'
import { motion } from 'framer-motion'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

interface Props {
  children: React.ReactNode
  mode: "dark" | "light"
}

export const PrimaryButton = ({children, mode}:Props ) => {
  return (
    <motion.button 
      whileHover={{ scale: 1.1}}
      className={`
        rounded-full
        w-full
        md:w-auto
        transition-all 
        duration-500 
        ${inter.className}  
        ${mode === "dark" ? "text-black" : "text-greenprimary"}
        ${mode === "dark" ? "bg-greenprimary" : "bg-black"}
        py-3
        h-full 
        px-10
        font-medium 
        `
      }
    >
      {children}
    </motion.button>
  )
}

export default PrimaryButton;

