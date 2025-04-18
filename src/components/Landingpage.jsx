import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
        <div className="textstructure mt-48 px-20">
            {["We create", "Eye opening", "presentation"].map((item, index) => {
                return (
                    <div className="masker">
                    <div className='w-fit flex items-center'>
                        {index === 1 && (<div className='w-[9vw] rounded-md mr-[1vw] h-[5.2vw] relative bg-red-500'></div>)}
                    <h1 className="uppercase text-[7vw] leading-[6vw] tracking-tighter flex items-center font-['Founders_Grotesk_X-Condensed'] font-bold">{item}</h1>
                    </div>   
                    </div>
                );
            })}
        </div>
        <div className='border-t-[1px] pl-20 pr-20 pt-5 border-zinc-800 mt-52 text-xl flex justify-between items-center'>
            {["For public and Private companies","From the first pitch to IPO"].map((item) => {
                return (
                    <p className="text-md font-light  tracking-tighter leading-none ">{item}</p>
                );
            })}
            <div className="start flex justify-center text-xl items-center gap-1">
                <div className='px-4 py-2 border-[1px] border-zinc-500 font-light text-sm capitalize rounded-full'>START THE PROJECT</div>
                <div className='w-10 h-10 border-[1px] flex justify-center rotate-[45deg] items-center rounded-full border-zinc-500'>
                <FaArrowUpLong />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landingpage