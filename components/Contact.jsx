import React from 'react'

function Contact() {
  return (
   <>
   <div className='flex flex-col items-center justify-center mt-[50px]'>
    <div className='flex flex-col items-center justify-center'>
        <h3>Lets talk</h3>
        <h2 className='text-[#010D82] font-extrabold text-2xl'>We are here to help you !</h2>
    </div>
    <div className='bg-[#51C9FF] w-[800px] md:h-[500px] mt-[30px] rounded-2xl flex flex-col items-center justify-center gap-[30px] p-4'>

        <div className='flex gap-[20px] flex-col md:flex-row'>
            <input type="email" placeholder="Email" className='p-2 h-[50px] rounded-lg w-[280px]'/>
            <input type="email" placeholder="Email" className='p-2 h-[50px] rounded-lg w-[280px]'/>
        </div>
        <div className='flex gap-[20px] flex-col md:flex-row'>
            <input type="email" placeholder="Email" className='p-2 h-[50px] rounded-lg w-[280px]'/>
            <input type="email" placeholder="Email" className='p-2 h-[50px] rounded-lg w-[280px]'/>
        </div>
        <div>
            <textarea placeholder="Your message" className='md:w-[580px] h-[150px] rounded-lg p-2 w-[300px]'/>
        </div>

        <div><button className='text-white bg-[#010D82] p-2 mt-[30px] w-[100px] rounded-md  text-sm'>Lets talk</button></div>

    </div>
   </div>
   </>
  )
}

export default Contact
