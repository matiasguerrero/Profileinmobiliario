import React from 'react'
import {Nav} from './Nav'
import { useMotionValueEvent, useScroll } from 'framer-motion'

export default function Layout({children}:any) {



  return (
    <div className='relative z-10 '>
        <Nav/>
        {children}
    </div>
  )
}
