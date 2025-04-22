import React from 'react'
import { motion } from 'framer-motion'
function Marquee() {
return (
        <div className='w-full rounded-tl-2xl rounded-tr-2xl py-10 bg-[#004d43]'>
                        <div className="text border-t-2 border-b-2 rounded-2xl gap-[5vw] tracking-tighter flex whitespace-nowrap overflow-hidden border-zinc-300">
                                        <h1 className='text-[20vw] leading-none uppercase font-semibold' style={{ letterSpacing: '-0.07em',wordSpacing:'-0.04em',fontFamily: 'PP Neue Montral-medium, sans-serif' }}>we are ochi</h1>
                                        <h1 className='text-[20vw] leading-none uppercase font-semibold' style={{ letterSpacing: '-0.07em',wordSpacing:'-0.04em',fontFamily: 'PP Neue Montral-medium, sans-serif' }}>we are ochi</h1>
                                        <h1 className='text-[20vw] leading-none uppercase font-semibold' style={{ letterSpacing: '-0.07em',wordSpacing:'-0.04em',fontFamily: 'PP Neue Montral-medium, sans-serif' }}>we are ochi</h1>
                        </div>
        </div>
)
}

export default Marquee