import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-4 px-[4%] justify-between'>
        <img className='w-[max(10%,120px)]' src={assets.logo} alt="" />
        <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-5 sm:py-2 rounded-full tex-xs sm:text-sm'>logout</button>
    </div>
  )
}

export default Navbar