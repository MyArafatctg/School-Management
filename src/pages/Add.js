import React from 'react'
import { assets } from '../assets/assets'

const Add = () => {
  

  return (
    <form>
      <div className='flex flex-col w-full items-start gap-3 mb-2'>
        <p className='mb-2'>Upload Image</p>
        <label htmlFor="image">
          <img className='w-[100px]' src={assets.upload_area} alt="" />
          <input type="file" id='image' hidden/>
        </label>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Student name</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="text" name="" id="" placeholder='Type here' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Parent name</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="text" name="" id="" placeholder='Type here' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Class</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="text" name="" id="" placeholder='Type here' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Section</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="text" name="" id="" placeholder='Type here' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Id No</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="text" name="" id="" placeholder='Type here' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Class Roll</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="text" name="" id="" placeholder='Type here' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Birthday</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="text" name="" id="" placeholder='Type here' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Valid Till</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="text" name="" id="" placeholder='Type here' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Gender</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="text" name="" id="" placeholder='Type here' required/>
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>Enroll Student</button>
    </form>
  )
}

export default Add
