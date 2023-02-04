import React,{useState} from 'react'
import Image from "next/image"
import {motion} from "framer-motion"
import Link from "next/link"

function Navbar() {
const [open,setOpen]= useState(false)

    const navAnimate = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                staggerChildren:0.45,
                when:"beforeChildren"
            }
        }
    }

    const ulAnimate ={
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                staggerChildren:0.45,
                when:"beforeChildren"
            }
        }
    }


    const liAnimate = {
        hidden:{
            opacity:0,
            x:"-100vw"
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:0.5
            }
        }
    }

    const btnContainer = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                staggerChildren:0.45,
                when:"beforeChildren"
            }
        }
    }

    const btn = {
        hidden:{
            opacity:0,
            x:"100vw"
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:0.5,
                ease:"easeInOut"
            }
        }
    }


  return (
   <>
   <motion.nav className='text-[#4E57A9] flex md:justify-around p-4 shadow-xl justify-between items-center  bg-[#F8FBFE]' style={{zIndex:99}}>
    <div>
        <Image src="/Group 8.png" width={100} height={150} alt="icon"/>

    </div>
    <motion.div  variants={ulAnimate} initial="hidden" animate="visible">
        <motion.ul className='md:flex gap-[30px] hidden' >
            <motion.li variants={liAnimate}>About</motion.li>
            <motion.li variants={liAnimate}>Pricing</motion.li>
            <motion.li variants={liAnimate}>Testimonials</motion.li>
            <motion.li variants={liAnimate}>Blog</motion.li>
        </motion.ul>
    </motion.div>
    <motion.div className='md:flex gap-[20px] align-items-center justify-items-center hidden' variants={btnContainer} initial="hidden" animate="visible">
        <motion.button className='bg-transparent p-2 rounded-md w-[100px]' variants={btn}>Sign in</motion.button>
        <motion.button className='bg-[#010D82] text-white p-2 rounded-md w-[100px]' variants={btn}>Sign up</motion.button>
    </motion.div>
    <div
          onClick={() => setOpen(!open)}
          className={`  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
          style={{zIndex:999}}

        >
           <Image src={open ? "/icon-close.svg" :"/icon-hamburger.svg"} alt="icon" width={30} height={15}></Image>
        </div>


        <div
          className={`md:hidden text-black absolute w-[80%] transition-all ease-in duration-300 z-10
      px-7 py-2 font-medium bg-white  top-0  ${
        open ? "right-0 block" : "left-0 hidden"
      }`}
        style={{zIndex:999}}>
            <div  onClick={() => setOpen(!open)} className="absolute top-[30px] right-[30px]"
          >
                 <Image src= "/icon-close.svg" alt="icon" width={20} height={15}></Image>
            </div>
          <ul className="flex flex-col justify-center h-[300px] gap-10 py-2 text-lg mt-[100px]">
                
                <li  onClick={() => setOpen(!open)}><Link href="/">Home</Link></li>
                <li  onClick={() => setOpen(!open)}>About Us</li>
                <li  onClick={() => setOpen(!open)}>How it works?</li>
                <li  onClick={() => setOpen(!open)}>Support</li>

               
          </ul>
          <div className='flex gap-[10px] p-3 -ml-[10px]'>
                <Link href="Authentication/login"> <motion.button className='shadow-md bg-[#010D82] text-white p-2 rounded-md w-[120px] hover:bg-[#51C9FF]' animate={{x:0}} initial={{x:"-100vw"}} transition={{duration:0.5}}>LOGIN</motion.button></Link>
                <Link href="Authentication/signup"> <motion.button className='shadow-md  bg-[#010D82] text-white p-2 rounded-md w-[120px] hover:bg-[#51C9FF]' animate={{x:0}} initial={{x:"-100vw"}} transition={{duration:0.5}}>SIGN UP</motion.button></Link>

                </div>
        </div>
   </motion.nav>
   </>
  )
}

export default Navbar
