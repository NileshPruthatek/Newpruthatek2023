import React from 'react'

const Subnavbar = () => {
  return (
    <>
    <div className='ml-[1rem] xl:ml-[3rem]'>
    <div className='  w-[96%] h-[50%]  rounded-[0.875rem] xl:w-[96%] xl:h-[50%] xl:border-2 xl:rounded[0.875rem]'>
       

            <ul className='text-[#010101] p-2   flex flex-row items-center xl:ml-10'>
                <li className='mr-6 font-normal text-[16px] leading-[22.85px]  xl:mr-8 '>All</li>
                <li className='mr-6 font-normal text-[16px] leading-[22.85px] xl:mr-8'>Cloud</li>
                <li className='mr-6 font-normal text-[16px] leading-[22.85px] xl:mr-8'>Products</li>
                <li className='mr-6 font-normal text-[16px] leading-[22.85px] xl:mr-8'>Mobile</li>
                <li className='mr-6 font-normal text-[16px] leading-[22.85px] xl:mr-8  '>Java</li>
                <li className='mr-6 font-normal text-[16px] leading-[22.85px]  xl:mr-8'>Big data & Bi</li>
                <li className='mr-6 font-normal text-[16px] leading-[22.85px] xl:mr-8 '>Software Devlopment</li>
                <li className='mr-6 font-normal text-[16px] leading-[22.85px] xl:mr-8 '>Ai</li>
                <li className='mr-6 font-normal text-[16px] leading-[22.85px] xl:mr-8'>Other</li>

                <form class="flex items-center text-[#010101] mr-8 ml-5">  
                    <input type='text' placeholder='Search here' className='bg-[#ffff] w-[340px] h-[45px] border-[#0038FF] rounded-[14px]'/>

                    <div className=' absolute translate-x-[18rem]'>

                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8.65871" cy="7.92366" r="6.76271" stroke="url(#paint0_linear_997_5903)" stroke-width="2"/>
                <defs>
                <linearGradient id="paint0_linear_997_5903" x1="6.60191" y1="9.45887" x2="-2.70468" y2="3.4708" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0038FF"/>
                <stop offset="0.526042" stop-color="#3A86FF"/>
                <stop offset="1" stop-color="#6DCCFF"/>
                </linearGradient>
                </defs>
                </svg>

                    </div>
                </form>
               
            </ul>

           
           

        
    </div>
    </div>
    </>
  )
}

export default Subnavbar