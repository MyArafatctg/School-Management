import React from 'react'
import { assets} from '../assets/assets'
const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <div className='flex items-center gap-2'>
        <img className='w-[max(4%,50px)]' src={assets.logo} alt="" />
        <p className='text-gray-700 text-2xl'>Gazi Munibur Rahman Nursing College, Patuakhali</p>
      </div>
      
      <button onClick={()=> setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
