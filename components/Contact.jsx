import React from 'react'

function Contact() {
  return (
   <>
   <div className='flex flex-col items-center justify-center mt-[50px]'>
    <div className='flex flex-col items-center justify-center'>
        <h3>Lets talk</h3>
        <h2 className='text-[#010D82] font-extrabold text-2xl'>We are here to help you !</h2>
    </div>
    <div className='bg-[#51C9FF] w-[800px] h-[500px] mt-[30px] rounded-2xl flex flex-col items-center justify-center gap-[30px]'>

        <div className='flex gap-[20px]'>
            <input type="email" placeholder="Email" className='p-2 h-[50px] rounded-lg w-[280px]'/>
            <input type="email" placeholder="Email" className='p-2 h-[50px] rounded-lg w-[280px]'/>
        </div>
        <div className='flex gap-[20px]'>
            <input type="email" placeholder="Email" className='p-2 h-[50px] rounded-lg w-[280px]'/>
            <input type="email" placeholder="Email" className='p-2 h-[50px] rounded-lg w-[280px]'/>
        </div>
        <div>
            <textarea placeholder="Your message" className='w-[580px] h-[150px] rounded-lg p-2'/>
        </div>

        <div><button className='text-white bg-[#010D82] p-2 mt-[30px] w-[150px] rounded-md  text-sm'>Get Started</button></div>

    </div>
   </div>
   </>
  )
}

export default Contact
