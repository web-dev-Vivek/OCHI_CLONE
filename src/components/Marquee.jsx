import React from 'react'

function Marquee() {
return (
    <div className='w-full py-10 bg-[#004d43]'>
            <div className="text border-t-2 border-b-2 gap-[5vw] tracking-tighter flex whitespace-nowrap overflow-hidden border-zinc-300">
                    <h1 className='text-[20vw] leading-none font-["FoundersGroteskCond-Lt.otf"] uppercase font-semibold' style={{ letterSpacing: '-0.04em' }}>we are ochi</h1>
                    <h1 className='text-[20vw] leading-none font-["FoundersGroteskCond-Lt.otf"] uppercase font-semibold' style={{ letterSpacing: '-0.04em' }}>we are ochi</h1>
                    <h1 className='text-[20vw] leading-none font-["FoundersGroteskCond-Lt.otf"] uppercase font-semibold' style={{ letterSpacing: '-0.04em' }}>we are ochi</h1>
            </div>
    </div>
)
}

export default Marquee