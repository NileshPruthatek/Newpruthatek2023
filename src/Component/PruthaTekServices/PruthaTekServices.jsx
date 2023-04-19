import React from 'react'



import MethodManagement from './MethodManagement'
import QualityAndBusiness from './QualityAndBusiness'
import Engagement from './Engagement'
import Business from './Business'


const PruthaTekServices = () => {
  return (
    <div className='bg-[#1E1E1E]   ml-[1rem]  my-[5rem] xl:ml-[6rem]'>

        {/*===========================================================first title============= */}
   
   
        <MethodManagement/>


        {/*=========================================================second============================= */}

         <QualityAndBusiness/>

         {/*=====================================end==================================== */}
        {/*=========================================================Third============================= */}

         <Business/>

       {/*=========================================================end============================= */}

       
            <Engagement/>
   

        
            
 </div>
  )
}

export default PruthaTekServices