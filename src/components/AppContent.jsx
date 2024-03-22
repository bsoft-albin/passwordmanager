import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Footer from '../components/Footer'


const AppContent = () => {

  const [menuState, setmenuState] = useState(0)


  return (
    <div className='w-full h-full'>
        <Navbar refFunction={setmenuState} />
        <Body renderComponent={menuState} gotoNavigate={setmenuState} />
        <Footer />
    </div> 
  )
}

export default AppContent