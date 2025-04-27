import React from 'react'

function about() {
  return (
    <div className='w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='font-["PP Neue Montreal_Medium "] text-[3vw] leading-[3vw]  text-black border-b-[1px] border-black py-[3vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='w-full flex mt-[6vw] items-center gap-[5vw] border-b-[1px] border-black pb-[3vw] '>
         <div className='flex w-[70vw]  gap-[30vw]'>
         <h1 className=' w-[10vw] text-[2vw] text-black'>What you can expect:</h1>
          <h1 className=' w-[15vw] text-[2vw] text-black'>
              We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.
              We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
          </h1>
         </div>
          <div className='flex text-[2vw] flex-col text-black '>
            <a href="">Instgram</a>
            <a href="">Behence</a>
            <a href="">Facebook</a>
            <a href="">LinkedIn</a>
          </div>
        </div>
        <div className='w-full flex justify-between gap-[10vw] '>
          <div className='mt-[2vw]'>
            <h1 className='text-black text-[5vw] font-bold' style={{letterSpacing:"-0.07em" , wordSpacing:"0.1em"}}>Our approch:</h1>
            <button className='bg-black rounded-full w-[15vw] flex justify-center items-center text-[2vw] h-10'><h1>READ MORE </h1></button>
          </div>
          <img className='mt-[3vw] w-[50vw] rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
    </div>
  )
}

export default about