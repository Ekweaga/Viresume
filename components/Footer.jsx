import React from 'react'
import Image from "next/image"

function Footer() {
  return (
    <>
    <footer className='bg-[#010D82] md:h-[400px] mt-[100px] text-white rounded-md flex items-center justify-center '>

      <div className='flex md:gap-[180px] w-[90%] mx-auto flex-col md:flex-row p-3 gap-[50px]'>
        <div>
        <Image src="/footerlogo.png" width={100} height={150} alt="icon"/>
        <p className='w-[150px] mt-[30px]'>2238 Partha Nethan Street,
Coimbatore - 638186
Tamil Nadu, India.</p>
<div className='flex gap-[20px] mt-[30px]'>
<Image src="/twitter.png" width={20} height={30} alt="icon"/>
<Image src="/facebook.png" width={20} height={30} alt="icon"/>
<Image src="/instagram.png" width={20} height={30} alt="icon"/>
<Image src="/linkedin.png" width={20} height={30} alt="icon"/>
</div>
        </div>

        <div>
          <h3 className='font-extrabold text-sm'>Useful links</h3>
          <ul className='flex flex-col text-sm gap-[20px] mt-[20px]'>
            <li>Payment & tax</li>
            <li>Terms of service</li>
            <li>Your Account</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <h3 className='font-extrabold text-sm'>Our company</h3>
          <ul className='flex flex-col text-sm gap-[20px] mt-[20px]'>
            <li>About us</li>
            <li>Media</li>
            <li>Contact</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <h3 className='font-extrabold text-sm'>Subscribe to our newsletter</h3>
          <ul className='flex flex-col text-sm gap-[20px] mt-[20px]'>

            <input type="email" placeholder="Email address" className='bg-[#0E1238] p-2 text-white rounded-md w-[250px] h-[45px]'/>
            <div>
              <span>help@visume.link</span><br/><span>396-987 456 885</span>
            </div>
           
          </ul>
        </div>
      </div>

    </footer>
    </>
  )
}

export default Footer