import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Footer from '../components/Footer'


const AppContent = () => {
  return (
    <div className='w-full'>
        <Navbar />
        <Body />
        <Footer />
    </div> 
  )
}

export default AppContent