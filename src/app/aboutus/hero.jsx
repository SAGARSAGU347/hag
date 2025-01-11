import React from 'react'

const hero = () => {
  return (
    <section >
    <div className="container-fluid ">
        <h1 className='text-center text-2xl mt-10'>We're here to </h1>
        <h1 className='text-center text-3xl text-blue-500'>guarantee your success </h1>
        <div className="h-[2px] w-[450] bg-white mb-6 mx-auto mt-3"></div>
        <div className="row ">
            <img className='w-[632] h-[420]' src='/guar.svg'/> 

        </div>
        <div className=' mt-10 w-[1400] h-[200]  px-12 py-12 text-xl bg-blue-500 mx-auto sagar tracking-wider	' >
            <p>ConsultUs provides consulting services that help business owners and leaders build a more valuable business. We worked with their founder to build a professional, modern site that follows the StoryBrand framework to clearly communicates the value it adds to potential clients</p>


        </div>
    </div>
    </section>
  )
}

export default hero