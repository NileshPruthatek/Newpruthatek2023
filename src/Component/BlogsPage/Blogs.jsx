import React from 'react'
import blogs from '../../assets/images/blogs.png'
import Subnavbar from './Subnavbar'
import BlogsList from './BlogsList'
const Blogs = () => {
  return (
   <>

   {/*======================================first blogs image======================= */}

   <div className='   bg-[#ffff]'>

    <div className=' flex flex-row ml-[1.5rem] my-5 xl:flex xl:flex-row xl:ml-20 sm:ml-36'>

   <img className="w-[18.688rem] h-[12.526rem]
    xl:w-[58%] xl:h-[58%] lg:w-[58%] lg:h-[58%] mb-20  border-2 rounded-[0.938rem] " src={blogs} alt="Bonnie "/>

   
   <div className=' w-[16.291rem] h-[10.819rem]  border-2 absolute translate-x-[5rem] translate-y-[3rem] rounded-[0.938rem]  backdrop-blur-[0.1rem] bg-[#939393]/20
       lg:w-[40%] lg:h-[80%] lg:absolute lg:translate-x-[30rem] lg:translate-y-[2rem]         xl:w-[40%] xl:h-[80%]    xl:absolute xl:translate-x-[40rem] xl:translate-y-[2rem] '>
            <div className='text-white -mb-5 xl:-mb-5'>

                <h1 className='p-5 not-italic font-semibold text-[0.75rem] leading-[1rem] capitalize xl:text-[1.875rem] xl:leading-[2.5rem] lg:text-[1.875rem] lg:leading-[2.5rem] '>Worldwide Repls, part 3: Firing Up The Engines</h1>

            </div>

            <div className='text-white -mb-2 xl:-mb-2'>
                <span className='p-5 not-italic font-normal text-[0.375rem] leading-[137.8%] xl:text-[1rem] lg:text-[1rem]'>Mar 22, 2023</span>

            </div>

            <div className='text-white -mb-8 xl:-mb-2'> 

                <p className='p-5 not-italic font-normal text-[0.5rem] leading-[142.8%] capitalize
                xl:text-[1.063rem] lg:text-[1.063rem] '>MACHINE LEARNING- the most hyped technology these days due to its ability to automate tasks,
                     detect patterns and learn from the data. It is becoming the most rapidly growing field…</p>

            </div>
            
            <div className='text-transparent  bg-clip-text bg-gradient-to-r from-[#F05225] to-[#EEA820]'>

                <h5 className='p-5 not-italic font-normal text-[18px] leading-[25px] '>Read more --</h5>

            </div>

    </div>
   </div>

   {/*=========================================SubNavbar=================================================== */}
                {/*  <Subnavbar/> */}
   {/*=========================================End SubNavbar============================================== */}

   {/*==========================================BlogsList============================================ */}
                 <BlogsList/> 
   {/*==========================================End ===================================================== */}
   </div>
   
   </>
  )
}

export default Blogs