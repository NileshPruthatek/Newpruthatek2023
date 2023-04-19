import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item bg-[#1E1E1E]   grid justify-items-center my-5">
        <div className=' w-[68.313rem] h-[4.688rem] rounded-lg ring-1 ring-purple-600 toggle'>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className='text-white p-5 px-5 py-5 not-italic font-bold text-[1.25rem] leading-[195.8%] tracking-[0.03em]'>{title}</div>
        <div className='text-white mt-[-2.8rem] ml-[90%] '>{isActive ? '-' : '+'}</div>
      </div>

      {isActive && <div className="accordion-content text-white p-5 px-5 py-5 not-italic font-bold text-[1.25rem] leading-[195.8%] tracking-[0.03em] mt-3">{content}</div>}
    </div>
    </div>
  );
};

export default Accordion;