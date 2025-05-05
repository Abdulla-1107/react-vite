import React from 'react'

const Hero = () => {
  return (
   <> <section className='w-full h-[500px] border bg-[url(./assets/mountain.png)] bg-no-repeat bg-center bg-cover flex items-center justify-center text-center text-white'>
        <div>
            <h1 className='text-[50px]'>Let's do it together.</h1>
            <p className='mt-5 mb-7 opacity-60 text-[20px]'>We travel the world in search of stories. Come along for the ride.</p>
           <button className='bg-[#DD783F] py-3 px-8 rounded-[5px] text-white hover:bg-[#c46d38] transition duration-300'>View Latest Posts</button>
        </div>
    </section>
    <section className='p-6 w-full flex justify-center items-center'>
        <div className='flex flex-wrap gap-[120px] justify-center items-center px-4 py-2 opacity-60'>
            <span className='text-[20px]'>Nature</span>
            <span className='text-[20px]'>Photography</span>
            <span className='text-[20px]'>Relaxation</span>
            <span className='text-[20px]'>Vacation</span>
            <span className='text-[20px]'>Travel</span>
            <span className='text-[20px]'>Adventure</span>
        </div>
    </section>

    </>
  )
}

export default Hero