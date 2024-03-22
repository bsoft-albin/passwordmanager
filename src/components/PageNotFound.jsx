import React from 'react'
import pgnot from '../assets/pgnot.png'
import { useNavigate } from 'react-router-dom'

const PageNotFound = ({fngotohome}) => {

  function asNavigate(){
    fngotohome(0)
  }

  return (
    <div className='w-full h-full flex items-center justify-center mt-10 mb-10'>
        <img style={{width : '400px',height : '400px'}} src={pgnot} />
        <div>
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
          onClick={() =>asNavigate()}
          data-ripple-light="true"
          >
           GoTo Home</button>
        </div>
    </div>
  )
}

export default PageNotFound