import React from 'react'
import client from '../../assets/images/Rectangle 649.png'
const MethodManagement = () => {
  return (
   <>

   
        {/*===========================================================first title============= */}
   
        <div className='flex flex-row'>
        <div className='text-white w-[4.009rem] h-[4.009rem]  border-2 border-[#F05225] rounded-full xl:w-[4.009rem] xl:h-[4.009rem] xl:border-2 xl:rounded-full'>
            <h1 className='text-white font-medium text-[2.188rem] leading-[4.163rem] ml-3 xl:ml-5 sm:ml-4'>1</h1>
        </div>
        <div className=' truncate  ml-[3rem] ont-medium text-[2.188rem] leading-[4.163rem] bg-clip-text bg-gradient-to-r from-[#F05225] to-[#EEA820]'>
            <h1 className='  text-transparent  bg-clip-text bg-gradient-to-r from-[#F05225]  to-[#EEA820]'>Method Management</h1>
        </div>

    </div>

     {/*============================================================================================ */}
    <div className='flex flex-col xl:flex xl:flex-row lg:flex lg:flex-row'>
    <div className='text-white '>

        <p className=' not itali items-center font-semibold text-[1.25rem] leading-[190.3%] ml-[7rem] sm:my-2 '>
            PruthaTek follows standard and reliable development and IT services methodology and 
            a thoughtful process that ensures business reliability.
             We combine our expertise with proven methods.</p>

    </div>

    


   
        {/*======================================image========================= */}

        <div className=' xl:mr-[20%] lg:mr-[10%]  sm:my-2 '>
            <img src={client} alt='pruthatekimage' className='w-[27.164rem] h-[15rem] mt-[-0%] sm:ml-[20%]  xl:mt-[-50%] lg:mt-[-50%] xl:ml-[50%]' />

        </div>

        {/*=================================image end============================= */}
        </div>
   </>
  )
}

export default MethodManagement