import React from 'react'
import { motion } from 'framer-motion'

interface TitleProps {
    content: string
    alignment: "start" | "end" | "center";
    subtitle?: string
    // theme: "dark" | "light"
}

export default function TitleSection({content, alignment, subtitle}:TitleProps) {
  return (
    <motion.div 

      initial={{y: 30, opacity: 0}}
      whileInView={{opacity: 1, y: 0}}
      style={{ overflow: "hidden"}}
      transition={{ duration: 0.6}}
      viewport={{ once: true }}
      className={`flex flex-col w-full items-${alignment}`}
    >
        <h2 className={`pt-2 uppercase w-full text-secondary text-xs md:text-base font-medium text-${alignment}`}>
          {subtitle}
        </h2>
        <h1 className={` text-xl md:text-3xl font-semibold text-${alignment}`}>{content}</h1>
    </motion.div>

  )
}
