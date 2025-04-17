import React from 'react'

function Landingpage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
        <div className="textstructure mt-48 px-20">
            {["We create", "Eye opening", "presentation"].map((item) => {
                return (
                    <div className="masker">
                        <h1 className="uppercase text-8xl tracking-tighter font-['Founders Grotesk'] font-medium">{item}</h1>
                    </div>
                );
            })}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-52 flex justify-between items-center'>
            {["For public and Private companies","From the first pitch to IPO"].map((item) => {
                return (
                    <p className="text-md font-light  tracking-tighter leading-none ">{item}</p>
                );
            })}
            <div className="start">
                <div className='px-4 py-2 border-[1px] border-zinc-500 font-light text-sm capitalize rounded-full'>START THE PROJECT</div>
                <div className=''></div>
            </div>
        </div>
    </div>
  )
}

export default Landingpage