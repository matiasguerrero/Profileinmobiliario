import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { CharacteristicsIconsProps } from "../Sections/About";
import { DownArrowIcon } from "../Icons";


interface CharacteristicsGeneralProps {
  icon: React.ReactNode
  title: string
  description: string
}

interface Characteristic {
  title: string
  description: string
}

interface AccordionProps {
    i: number
    expanded: false | number
    setExpanded: (value: false | number) => void;
}

const Accordion = ({ i, expanded, setExpanded, title, description, icon }:AccordionProps & CharacteristicsGeneralProps) => {
    
  const isOpen = i === expanded;
  
    return (
      <>
        <motion.header
          className="cursor-pointer flex items-center justify-between px-4 py-2 rounded-xl shadow-lg"
          initial={false}
          onClick={() => setExpanded(isOpen ? false : i)}
        >
          <div className={`text-lg font-semibold flex items-center gap-3`}>{icon}{title}</div>
          <motion.div
            animate={{ rotateZ: isOpen ? 180 : 0}}
            className="stroke-white"
          >
            <DownArrowIcon/>
          </motion.div>
        </motion.header>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              className="px-2"
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 }
              }}
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              {description}
            </motion.section>
          )}
        </AnimatePresence>
      </>
    );
  };


  
  export const Characteristics = ({icons, data}:{ icons: any, data: any   } ) => {
    const [expanded, setExpanded] = useState<false | number>(0);
  
    return (
    <div className=" px-4 flex flex-col gap-2">
      {data.map((item:any, index:number) => (
        <Accordion key={item.title} i={index} expanded={expanded} setExpanded={setExpanded} title={item.title} description={item.description} icon={icons[index].icon} />
      ))}
    </div>
    )
  };
  
