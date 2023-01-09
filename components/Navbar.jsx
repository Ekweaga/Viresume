import React from 'react'
import Image from "next/image"

function Navbar() {
  return (
   <>
   <nav className='text-[#4E57A9] flex justify-between p-4'>
    <div>
        <Image src="/Group 8.png" width={100} height={150} alt="icon"/>

    </div>
    <div>
        <ul className='md:flex gap-[20px] hidden'>
            <li>About</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Blog</li>
        </ul>
    </div>
    <div className='md:flex gap-[20px] align-items-center justify-items-center hidden'>
        <button className='bg-transparent p-2 rounded-md w-[100px]'>Sign in</button>
        <button className='bg-[#010D82] text-white p-2 rounded-md w-[100px]'>Sign up</button>
    </div>
   </nav>
   </>
  )
}

export default Navbar
