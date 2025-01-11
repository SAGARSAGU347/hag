import React from 'react'
import Hero from '../aboutus/hero'
import Sec from '../aboutus/Sec'
import Success from '../aboutus/Success'
import Contact from './Contact'


import Navbar from '../Navbar/page'

const page = () => {
  const backgroundImage = 'url(/back.svg)'; // Path to your image

  return (
    <div
     
    >
      <Navbar/>
      <Hero />
      <Sec />
      <Success/>
      <Contact/>
    
    
    </div>
  )
}

export default page
