import React from 'react'
import SectionWraper from './SectionWraper'
import { EmailIcon, InstagramIcon, LinkedinIcon, LogoIcon, WspIcon } from '../Icons'
import Link from 'next/link'
import logoApi from "@/../public/images/logo_api1.jpg"
import logoIset from "@/../public/images/logo_ISET.png"
import Image from 'next/image'
import { Link as ScrollLink } from "react-scroll"
import { useRouter } from 'next/router'

export default function Footer({data}:any) {

  const router = useRouter()

  return (
    <div className='bg-gradient-to-b from-[#000] to-[#01080E] text-white'>
    <SectionWraper>
      <div className='grid grid-cols-1 md:grid-cols-3 py-6'>
        <div className='w-full flex flex-col gap-5'>
          <h1 className=''><LogoIcon color={"#c0ff3f"} /></h1>
          <h2 className='font-semibold text-2xl'>{data.title.line1} <br/> {data.title.line2}</h2>
          <h3 className='font-normal text-base'>Martin Mariotti, 2023</h3>
        </div>
        {/* Acreditaciones */}
        <div className='px-0 md:px-10 md:pl-20 pt-6 flex flex-col gap-3'>
          <h2 className='text-xl '>{data.acreditations}</h2>
          <div className='h-24 relative'>
            <Image className='rounded-md' src={logoApi} height={80} alt='Logo de El Colegio de Agentes Inmobiliarios '/>
          </div>
          <div className='h-24 relative'>
            <Image className='rounded-md' src={logoIset } height={80} alt='Logo de El Colegio de Agentes Inmobiliarios '/>
          </div>

        </div>
        <div className=' mt-5 flex flex-col gap-2 md:gap-4 text-lg md:text-xl justify-center items-start md:items-end'>
        {router.pathname === "/inicio" ? 
          <div className='cursor-pointer nav-link'>
            <ScrollLink to="section_services" smooth={true} duration={500}>{data.nav.services_nav}</ScrollLink>
          </div>
          :
          <Link href={"/inicio#section_services"} className='nav-link'>{data.nav.services_nav}</Link>
          }
          <Link className='nav-link' href={"/contacto"}>Blog</Link>
          
          {router.pathname === "/inicio" ? 
          <div className='cursor-pointer nav-link'>
            <ScrollLink to="section_about_me" smooth={true} duration={500}>{data.nav.about_nav}</ScrollLink>
          </div>
          :
          <Link href={"/inicio#section_about_me"} className='nav-link'>{data.nav.about_nav}</Link>
          }

          <Link className='nav-link' href={"/contacto"}>{data.nav.contact_nav}</Link>
        </div>
      </div>
      <div className='my-10 h-[2px] bg-gradient-to-r from-[#030E16] via-white to-[#030E16]'></div>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <p className='order-2 md:order-1 text-light text-sm mt-3 text-[#888]'>© 2023 Martin Mariotti. All rights reserved</p>
        <p className='order-1 md:order-2 text-greenprimary '> <a href='mailto:martinmariotti.realestate@gmail.com'>martinmariotti.realestate@gmail.com</a></p> 
      </div>
    </SectionWraper>
  </div>
  )
}
