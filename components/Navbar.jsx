import React from 'react'
import Image from "next/image"
import {motion} from "framer-motion"

function Navbar() {
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
   <motion.nav className='text-[#4E57A9] flex justify-around p-4'>
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
   </motion.nav>
   </>
  )
}

export default Navbar
