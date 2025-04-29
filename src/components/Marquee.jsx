import React from 'react'
import { motion } from 'framer-motion'
function Marquee() {
return (
        <div data-scroll data-scroll-section data-scroll-speed=".3" className='w-full rounded-tl-2xl rounded-tr-2xl py-10 bg-[#004d43]'>
                        <div className="text border-t-2 border-b-2 rounded-2xl tracking-tighter flex  whitespace-nowrap overflow-hidden border-zinc-300">
                                        <motion.h1 initial={{x:0}} animate={{x: "-100%" }} transition={{ repeat:Infinity , ease: "linear" , duration: 5}} className='pr-40 text-[20vw] leading-none  uppercase font-semibold' style={{ letterSpacing: '-0.07em',wordSpacing:'-0.04em',fontFamily: 'PP Neue Montral-medium, sans-serif' }}>we are ochi</motion.h1>
                                        <motion.h1 initial={{x:0}} animate={{x: "-100%" }} transition={{ repeat:Infinity , ease: "linear" , duration: 5}} className='pr-40 text-[20vw] leading-none  uppercase font-semibold' style={{ letterSpacing: '-0.07em',wordSpacing:'-0.04em',fontFamily: 'PP Neue Montral-medium, sans-serif' }}>we are ochi</motion.h1>
                                  </div>
        </div>
)
}

export default Marquee