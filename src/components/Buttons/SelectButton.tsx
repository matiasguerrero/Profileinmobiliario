import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { DownArrowIcon } from '../Icons'
import { useRouter } from 'next/router'

interface Props {
  children: React.ReactNode
}

export const SelectButton = () => {
  const router = useRouter()
  
  const [langActive, setLangActive] = useState("")
  const [isOpen, setIsOpen] = useState(false)



  useEffect(() => {
    if (langActive != "") {
      router.push(router.pathname, router.pathname, {
        locale: langActive
      })
    }
  }, [langActive])

  function handleOpenLangList() {
    setIsOpen(!isOpen)
  }

  function handleItemClick(code:string) {
    setLangActive(code)
    handleOpenLangList()
  }



  return (


    <div className='relative flex flex-col items-center'>
      <motion.div 
        onClick={handleOpenLangList}
        className='cursor-pointer border-2 border-white py-2 px-5 text-white rounded-full text-lg font-medium'
        whileHover={{backgroundColor: "#fff", color: "#000"}}
      >
        {router.locale === "es" && "Idioma"}
        {router.locale === "en" && "Language"}
        {router.locale === "it" && "Lingua"}

      </motion.div>
      <div className='w-full flex justify-center'>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className='absolute text-black text-lg '
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
              <ul className='mt-1 overflow-hidden cursor-pointer text-black bg-white w-full text-center font-medium rounded-2xl flex flex-col gap-1'>
                <li 
                  className='hover:bg-greenprimary hover:text-black w-full px-4 py-2' 
                  onClick={() => handleItemClick("en")}
                >
                  {router.locale === "es" && "Ingles"}
                  {router.locale === "en" && "English"}
                  {router.locale === "it" && "Inglese"}
                </li>
                <li 
                  className='hover:bg-greenprimary hover:text-black w-full px-4 py-2' 
                  onClick={() => handleItemClick("es")}
                >
                  {router.locale === "es" && "Español"}
                  {router.locale === "en" && "Spanish"}
                  {router.locale === "it" && "Spagnolo"}
                </li>
                <li 
                  className='hover:bg-greenprimary hover:text-black w-full px-4 py-2' 
                  onClick={() => handleItemClick("it")}
                >
                  {router.locale === "es" && "Italiano"}
                  {router.locale === "en" && "Italian"}
                  {router.locale === "it" && "Italiano"}
                </li>
              </ul>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>


  )
}

export default SelectButton;


    {/* <select onChange={ChangeLang} className='bg-transparent text-white '>
      <option value="">Idioma</option>
      <option className='text-black' value="es">Español</option>
      <option className='text-black' value="en">Ingles</option>
      <option className='text-black' value="it">italiano</option>
    </select> */}