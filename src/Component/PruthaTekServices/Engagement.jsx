import React from 'react'
import Engagement1 from '../../assets/images/qulity.png'
const Engagement = () => {
  return (
    <>
        
          {/*===========================================================fourth title============= */}
          <div className='flex flex-row my-2 sm:my-2'>
        <div className='text-white w-[4.009rem] h-[4.009rem]  border-2 border-[#0DA1DA] rounded-full'>
            <h1 className='text-white font-medium text-[2.188rem] leading-[4.163rem] ml-5'>4</h1>
        </div>
        <div className='text-white'>
            <h1 className=' ml-[3rem] ont-medium text-[2.188rem] leading-[4.163rem] truncate  text-transparent  bg-clip-text bg-gradient-to-r from-[#0038FF]  to-[#9747FF]'>Engagement Models</h1>
        </div>

    </div>

     {/*============================================================================================ */}
    <div className='flex flex-col xl:flex xl:flex-row lg:flex lg:flex-row'>
    <div className='text-white '>

        <p className=' not itali items-center font-semibold text-[1.25rem] leading-[190.3%] ml-[7rem]  '>
        Your business solution should be safe and secure with our expertise in development.
         At PruthaTek, we deliver secure and quality IT sevices, 
        protecting your critical data with the required technology.</p>

    </div>

    


   
        {/*======================================image========================= */}

        <div className='xl:mr-[20%] lg:mr-[10%]  sm:my-2 '>
            <img src={Engagement1} alt='pruthatekimage' className='w-[27.164rem] h-[15rem]  ml-10 sm:ml-[20%] xl:mt-[-50%] lg:mt-[-50%] lg:ml-[20%] xl:ml-[50%]' />

        </div>

        {/*=================================image end============================= */}
        </div>

          {/*========================================================end========================== */}


    </>
  )
}

export default Engagement