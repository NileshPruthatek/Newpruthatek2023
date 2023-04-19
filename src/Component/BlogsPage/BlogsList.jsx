import React from 'react'
//import blogs from '../../assets/images/blogs.png'
//import profile from '../../assets/images/profile.png'
import data from '../json/data.json'
const BlogsList = () => {
  return (
    <div className=' flex flex-row flex-wrap items-center justify-center'>


        {data.map(record => {

            return(
                <div key={record.index} >
                    {/*==================================data================================ */}

                        {/*======================================cards1 ================================== */}
       <div className='ml-[0.5rem]'>        
    <div class="w-[22.5rem] h-[30rem] p-6 mr-5 my-2 bg-[#fffff] border  rounded-[1.536rem] shadow-lg shadow-[#939393] lg:mr-2">
        <div className='flex space-x-4 items-center' >
        
        <img className="w-[10%] h-[10%]   rounded-full " src={record.proimage} alt="owner "/>
       
         <div className='text-[#101010] font-normal text-[13px] '>
            <h1>{record.name}</h1>
        </div>
        <div className=' w-[6.255rem] h-[6vh]  border-2  rounded-[0.875rem] xl:w-[40%] xl:h-[7vh]'>

            <h5 className='p-2  text-[#101010] flex items-center font-normal text-[0.813rem]'> {record.date} </h5>

        </div>



        </div>

{/*===================================image =========================== */}

    <div className='flex items-center my-2'>
    <img className="w-[325px] h-[180px] mb-1  rounded-[5.84px] transition duration-300 ease-in-out hover:scale-110" src={record.image} alt="Bonnie "/>
    </div>

    <div className='text-[#101010] flex items-center'>
        <h1 className='p-1 text-[15px] not-italic font-medium leading-[145.3%] capitalize'>{record.title}</h1>

    </div>
    <div className='text-[#101010] flex items-center'>
        <p className='p-1 text-[13px] not-italic font-light leading-[142.8%] capitalize'>{record.disc}</p>

    </div>

    <div className='text-transparent  bg-clip-text bg-gradient-to-r from-[#F05225] to-[#EEA820]'>

        <h1 className='not-italic font-normal text-[18px] leading-[25px]'>{record.more}
</h1>

    </div>

       
</div>

</div> 

                   
                   
                </div>
            )
        })}

 {/*=============================end ======================================= */}

 {/*=====================================pagination and view more============== */}
 <div className='text-[#010101] ml-[10rem] my-5 xl:ml-[70rem]'>

 <button className="bg-[#F9F9F9] w-[10rem] h-[5vh]">View More</button>

 </div>

 {/*===================================end ===================================== */}
     
    </div>
  )
}

export default BlogsList