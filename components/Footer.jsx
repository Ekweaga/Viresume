import React from 'react'
import Image from "next/image"
import {motion} from "framer-motion"

function Footer() {
  const footerAnimate = {
    hidden:{
      opacity:1
    },
    visible:{
      opacity:1,
      transition:{
        staggerChildren:0.35,
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
                duration:0.8
            }
        }
    }


    const liAnimateTwo = {
      hidden:{
          opacity:0,
          y:100
      },
      visible:{
          opacity:1,
          y:0,
          transition:{
              duration:0.8
          }
      }
  }

  const heading = {
    hidden:{
      opacity:0,
      x:-200
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
          duration:0.8
      }
    }
  }

  const sub ={
    hidden:{
      opacity:0,
      x:"100vw"
  },
  visible:{
      opacity:1,
      x:0,
      transition:{
          duration:0.8
      }
  }
  }
  return (
    <>
    <footer className='bg-[#010D82] md:h-[400px] mt-[100px] text-white rounded-md flex items-center justify-center '>

      <motion.div className='flex md:gap-[180px] w-[90%] mx-auto flex-col md:flex-row p-3 gap-[50px]' variants={footerAnimate} initial="hidden" whileInView="visible" viewport={{amount:0.5}}>
        <div>
       <motion.div variants={heading}> <Image src="/footerlogo.png" width={100} height={150} alt="icon"/></motion.div>
        <p className='w-[150px] mt-[30px]'>2238 Partha Nethan Street,
Coimbatore - 638186
Tamil Nadu, India.</p>
<div className='flex gap-[20px] mt-[30px]'>
<motion.div variants={sub}><Image src="/twitter.png" width={20} height={30} alt="icon"/></motion.div>
<motion.div variants={sub}><Image src="/facebook.png" width={20} height={30} alt="icon"/></motion.div>
<motion.div variants={sub}><Image src="/instagram.png" width={20} height={30} alt="icon"/></motion.div>
<motion.div variants={sub}><Image src="/linkedin.png" width={20} height={30} alt="icon"/></motion.div>
</div>
        </div>

        <div>
          <motion.h3 className='font-extrabold text-sm' variants={heading}>Useful links</motion.h3>
          <ul className='flex flex-col text-sm gap-[20px] mt-[20px]'>
            <motion.li variants={liAnimate}>Payment & tax</motion.li>
            <motion.li variants={liAnimate}>Terms of service</motion.li >
            <motion.li variants={liAnimate}>Your Account</motion.li >
            <motion.li variants={liAnimate}>Privacy policy</motion.li >
          </ul>
        </div>

        <div>
          <motion.h3 className='font-extrabold text-sm' variants={heading}>Our company</motion.h3>
          <ul className='flex flex-col text-sm gap-[20px] mt-[20px]'>
            <motion.li variants={liAnimateTwo}>About us</motion.li >
            <motion.li variants={liAnimateTwo}>Media</motion.li >
            <motion.li variants={liAnimateTwo}>Contact</motion.li>
            <motion.li variants={liAnimateTwo}>Privacy policy</motion.li>
          </ul>
        </div>
        <div>
          <motion.h3  className='font-extrabold text-sm' variants={heading}>Subscribe to our newsletter</motion.h3 >
          <ul className='flex flex-col text-sm gap-[20px] mt-[20px]'>

          <motion.div variants={sub}>  <input type="email" placeholder="Email address" className='bg-[#0E1238] p-2 text-white rounded-md w-[250px] h-[45px]'/></motion.div>
            <div>
              <motion.span variants={sub}>help@visume.link</motion.span><br/><motion.span variants={sub}>396-987 456 885</motion.span>
            </div>
           
          </ul>
        </div>
      </motion.div>

    </footer>
    </>
  )
}

export default Footer