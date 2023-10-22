import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import BlogSection from '@/components/Sections/BlogSection'
import HeaderSection from '@/components/Sections/HeaderSection'
import SectionWraper from '@/components/Layout/SectionWraper'
import Footer from '@/components/Layout/Footer'
import AboutSection from '@/components/Sections/About'
import ServicesSection from '@/components/Sections/ServicesSection'
import ContactSection from '@/components/Sections/ContactSection'
import { useRouter } from 'next/router'

export default function HomePage(props:any) {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes('#section_about_me')) {
      const targetElement = document.getElementById('section_about_me');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [router.asPath]);

  return (
    <motion.div
        className={` min-h-screen overflow-y-hidden scroll-smooth	`}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
      <HeaderSection data={props.homeData}/>
      <div id='section_services'>
        <SectionWraper>
          <ServicesSection data={props.servicesData}/>
        </SectionWraper>
      </div>
      <div id='section_about_me' className='mx-3 rounded-4xl bg-[#020202] text-white'>
        <SectionWraper>
          <AboutSection data={props.aboutData}/>
        </SectionWraper>
      </div>
      <SectionWraper>
        <BlogSection data={props.blogData}/>
      </SectionWraper>
      <SectionWraper>
        <ContactSection data={props.contactData}/>
      </SectionWraper>
      {/* TODO: TRADUCIR FOOTER */}
      <Footer data={props.footerData}/>
      {/*  */}
    </motion.div>
  )
}


export async function getStaticProps({locale}:any) {

  const response = await import (`../../lang/${locale}.json`)
  
  return {
    props: {
      homeData: response.default.home,
      servicesData: response.default.services,
      aboutData: response.default.about,
      blogData: response.default.blog,
      contactData: response.default.contact,
      footerData: response.default.footer
    }
  }
}