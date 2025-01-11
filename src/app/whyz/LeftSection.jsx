import React from 'react'
import GradientCard from '../whyz/GradientCard'

const LeftSection = () => {
  return (
    <div className='container'>
        <h1 className='text-center mb-10  '>Why Zenix</h1>
        <div className=' flex flex-row mt-5 justify-content-between items-center py-6  '>
        <div className='w-[520] h-[396]'>
            <img src='/tab.svg'/>
        </div>
        <div className='w-[326] h-[370] '>
        <GradientCard/>
        </div>
        </div>
        <div className=' flex flex-row mt-5 justify-content-between  items-center'>
        <div className='w-[326] h-[370] '>
        <GradientCard/>
        </div>
        <div className='w-[520] h-[396]'>
            <img src='/ss.svg'/>
        </div>
        
        </div>
        <div className=' flex flex-row mt-5 justify-content-between items-center'>
        <div className='w-[520] h-[396]'>
            <img src='/ss1.svg'/>
        </div>
        <div className='w-[326] h-[370] '>
        <GradientCard/>
        </div>
        </div>
        <div className=' flex flex-row mt-5 justify-content-between items-center'>
        <div className='w-[326] h-[370] '>
        <GradientCard/>
        </div>
        <div className='w-[520] h-[396]'>
            <img src='/ss2.svg'/>
        </div>
        
        </div>
        <div className=' flex flex-row mt-5 justify-content-between items-center'>
        <div className='w-[520] h-[396]'>
            <img src='/ss3.svg'/>
        </div>
        <div className='w-[326] h-[370] '>
        <GradientCard/>
        </div>
        </div>
        
        
        

        
        
        
        
        
    </div>
  )
}

export default LeftSection