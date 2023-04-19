import React from 'react'
import client from '../../assets/images/qulity.png'
const QualityAndBusiness = () => {
  return (
   <>
   
        {/*=========================================================second============================= */}

         {/*===========================================================second title============= */}
         <div className='my-5 xl:my-[5rem] lg:my-[5rem] sm:my-2'>
    <div className='flex flex-row '>
        <div className='text-white w-[4.009rem] h-[4.009rem]  border-2 border-[#0038FF] rounded-full'>
            <h1 className='text-white font-medium text-[2.188rem] leading-[4.163rem] ml-1 xl:ml-5 sm:ml-2 lg:ml-5'>2</h1>
        </div>
        <div className='ml-[3rem] ont-medium text-[2.188rem] leading-[4.163rem] truncate'>
            <h1 className='    text-transparent  bg-clip-text bg-gradient-to-r from-[#0DA1DA]  to-[#5DB98E]'>Quality Management</h1>
        </div>

    </div>

   

     {/*============================================================================================ */}
    <div className='flex flex-col xl:flex xl:flex-row lg:flex lg:flex-row'>
    <div className='text-white '>

        <p className=' not itali items-center font-semibold text-[1.25rem] leading-[190.3%] ml-[7rem]  '>
        Quality is our priority, and we guarantee for safer and more secure mobile and web solution, 
        launch and deliver web and mobile app by ensuring quality in terms of usability,
         performance and security.</p>

    </div>

    


   
        {/*======================================image========================= */}

        <div className=' xl:mr-[20%] lg:mr-[10%] sm:my-5'>
            <img src={client} alt='pruthatekimage' className='w-[27.164rem] h-[15rem] mt-[-0%]  xl:mt-[-50%] lg:mt-[-50%] xl:ml-[50%] sm:ml-[20%]' />

        </div>

        {/*=================================image end============================= */}
        </div>

        
    </div>
   </>
  )
}

export default QualityAndBusiness