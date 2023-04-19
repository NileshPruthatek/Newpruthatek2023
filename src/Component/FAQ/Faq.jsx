import React from 'react'
import Accordion from '../FAQ/Accordition'; 
const Faq = () => {

    
    
    
    const accordionData = [
        {
          title: 'What platform should we target? iOS/ Android or both?',
          content: `With the developing platform popularity of both iPhone and the most recent Android cell phones, we prescribe to dispatch the product on the two stages and based on the business requirements.`
        },
        {
            title: 'What platform should we target? iOS/ Android or both?',
            content: `With the developing platform popularity of both iPhone and the most recent Android cell phones, we prescribe to dispatch the product on the two stages and based on the business requirements.`
          },
          {
            title: 'What platform should we target? iOS/ Android or both?',
            content: `With the developing platform popularity of both iPhone and the most recent Android cell phones, we prescribe to dispatch the product on the two stages and based on the business requirements.`
          },
          {
            title: 'What platform should we target? iOS/ Android or both?',
            content: `With the developing platform popularity of both iPhone and the most recent Android cell phones, we prescribe to dispatch the product on the two stages and based on the business requirements.`
          },
             
       
      ];

    
  return (
    <>
    {/* 
    <div className='bg-[#1E1E1E]   grid justify-items-center   '>
        <div className=' text-[1.563rem] leading-[1.981rem] font-bold text-[#ffff] my-5 '>
            <h3 >Frequently Asked Questions</h3>
        </div>

     

        <div className="flex items-center justify-center ">
            <div className="my-5">
            <div className="space-y-4">
                        <div className="w-[68.313rem] h-[4.688rem] rounded-lg ring-1 ring-purple-600 ">
                          
                            

                            <h3 className='text-white p-5 px-5 py-5 not-italic font-bold text-[1.25rem] leading-[195.8%] tracking-[0.03em]'>What platform should we target? iOS/ Android or both? </h3>    
                           
                            <div className='text-white mt-[-2.8rem] ml-[90%] '>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='' >
<path d="M0.597656 9.10757V6.41258H6.65266V0.392578H9.38266V6.41258H15.4027V9.10757H9.38266V15.1276H6.65266V9.10757H0.597656Z" fill="white"/>
</svg>
                          </div>


                        </div>

                        
        </div>
        </div>
        </div>

        </div>
        */}

        {/*========================================demo======================== */}
        <div className='grid justify-items-center '>
     
      <div className="accordion ">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Faq