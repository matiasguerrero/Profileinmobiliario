import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { BlogList } from '@/db/BlogList'
import TitleSection from '@/components/Layout/TitleSection'
import {  UpArrowIcon } from '@/components/Icons'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    }
  }
  
  // const serviceVariant = {
  //   hidden: { opacity: 0, y: 50 },
  //   show: { 
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.7,
  //       type: "spring"
  //     }
  //   },
  // }
  
export default function BlogSection({data}:any) {

  const router = useRouter()

    interface BlogData {
        image: StaticImageData
        date: string
        description: string
        category: string
        isSecondaryBlog?: boolean
        title: string
    }

    const Blog: React.FC<BlogData> = ({image, description, date, title }) => {

      const [isHover, setIsHover] = useState(false)

        return (
          <motion.div
            onClick={() => router.push("/blog")}
            className=" px-5 py-2 group cursor-pointer relative w-full text-white flex flex-col justify-end h-36 md:h-96 overflow-hidden rounded-3xl"
            onHoverStart={()=> setIsHover(true)}
            onHoverEnd={()=> setIsHover(false)}
          >
              <Image
                src={image}
                alt='imagen del servicio' 
                layout="fill"
                objectFit="cover"
                quality={100}
                className=' brightness-[0.4] ease-in duration-100'
              />
              <h3 className={`z-20 font-medium text-base md:text-lg`}>{title}</h3>
              <div className='flex justify-end relative z-20  gap-5'>
                <motion.div
                 animate={{ rotateZ: isHover ? 45 : 0, fill: isHover ? "#c0ff3f" : "none", stroke: isHover ? "black" : "white" }}
                >
                  <UpArrowIcon/>
                </motion.div>
              </div>
          </motion.div>
        )
    }


  return (
    <>
      <TitleSection 
        content={data.title}
        subtitle='' 
        alignment='center'
      />
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show" 
        viewport={{ once: true }}
        className='mt-14 grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-3 md:px-10'
      >
        {data.blogs.slice(0,4).map((blog:any, index:number) => (
          <Blog key={blog.title} index={index} {...blog} image={BlogList[index].image} />
        ))}
      </motion.div>
    </>
  )
}
