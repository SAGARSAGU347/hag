import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Success = () => {
  return (
    <>
    <h1 className='text-center mt-12 mb-12 text-blue-500 text-3xl'>Our Success Team</h1>
    
    <div className="flex  w-full justify-between items-center gap-6  ">
  <div className="flex-1 max-w-[190px] h-[452px] bg-blue-500 rounded-[50px]">
    <img src="/per4.svg" alt="Jenny Wilson" className="w-full h-full object-cover rounded-[50px]" />
   
  </div>

  <div className="flex-[2] max-w-[380px] h-[452px] bg-blue-500 rounded-[50px]">
    <img src="/per1.svg" alt="Jenny Wilson" className="w-full h-full object-cover rounded-[50px]" />
    <p className="text-center text-3xl mt-3" style={{ color: "#262626" }}>Jenny Wilson</p>
  </div>

  <div className="flex-[2] max-w-[380px] h-[452px] bg-blue-500 rounded-[50px]">
    <img src="/per2.svg" alt="Eleanor Pena" className="w-full h-full object-cover rounded-[50px]" />
    <p className="text-center text-3xl mt-3" style={{ color: "#262626" }}>Eleanor Pena</p>
  </div>

  <div className="flex-[2] max-w-[380px] h-[452px] bg-blue-500 rounded-[50px]">
    <img src="/per3.svg" alt="Robert Fox" className="w-full h-full object-cover rounded-[50px]" />
    <p className="text-center text-3xl mt-3" style={{ color: "#262626" }}>Robert Fox</p>
  </div>

  <div className="flex-1 max-w-[190px] h-[452px]  ">
    <img src="/per5.svg" alt="Jenny Wilson" className="w-full h-full object-cover rounded-[50px]" />
    <p className="text-end text-3xl mt-3 mr-10" style={{ color: "#262626" }}> Ra</p>
  </div>
  
</div>
<div className="flex items-center justify-center gap-4 bg-black p-4 mt-10 ">
      <ChevronLeft className="w-6 h-6 text-white" />
      
      <div className="flex gap-2">
        <div className="w-2 h-2 rounded-full bg-white" />
        <div className="w-2 h-2 rounded-full bg-blue-500" />
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>

      <ChevronRight className="w-6 h-6 text-white" />
    </div>


  </>

  )

}

export default Success