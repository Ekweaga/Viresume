import React from 'react'
import {motion} from "framer-motion"

function Contact() {

    const formAnimate = {
        hidden:{
            opacity:0,
            x:200
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                when:"beforeChildren",
                staggerChildren:0.35,
                ease:'easeIn'
            }
        }
    }

    const inputAnimateOne ={
        hidden:{
            opacity:0,
            y:200
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:0.5
            }
        }
    }

    const inputAnimateTwo ={
        hidden:{
            opacity:0,
            y:-200
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:0.5
            }
        }
    }

    const btn ={
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
          
            transition:{
                duration:0.8
            }
        }
    }
  return (
   <>
   <div className='flex flex-col items-center justify-center mt-[50px]'>
    <div className='flex flex-col items-center justify-center'>
        <h3>Lets talk</h3>
        <h2 className='text-[#010D82] font-extrabold text-2xl'>We are here to help you !</h2>
    </div>
    <motion.div className='bg-[#51C9FF] md:w-[800px] md:h-[500px] mt-[30px] rounded-2xl flex flex-col items-center justify-center gap-[30px] p-4' variants={formAnimate} initial="hidden" whileInView="visible" viewport={{amount:0.5}}>

        <div className='flex gap-[20px] flex-col md:flex-row'>
           <motion.div variants={inputAnimateOne}> <input type="email" placeholder="Email" className='p-2 h-[50px] rounded-lg w-[280px]'/></motion.div>
           <motion.div variants={inputAnimateTwo}> <input type="email" placeholder="Email" className='p-2 h-[50px] rounded-lg w-[280px]'/></motion.div>
        </div>
        <div className='flex gap-[20px] flex-col md:flex-row'>
        <motion.div variants={inputAnimateOne}>  <input type="email" placeholder="Email" className='p-2 h-[50px] rounded-lg w-[280px]'/></motion.div>
        <motion.div variants={inputAnimateTwo}> <input type="email" placeholder="Email" className='p-2 h-[50px] rounded-lg w-[280px]'/></motion.div>
        </div>
        <motion.div variants={inputAnimateOne}>
            <textarea placeholder="Your message" className='md:w-[580px] h-[150px] rounded-lg p-2 w-[300px]'/>
        </motion.div>

        <div><motion.button className='text-white bg-[#010D82] p-2 mt-[30px] w-[100px] rounded-md  text-sm' variants={btn}>Lets talk</motion.button></div>

    </motion.div>
   </div>
   </>
  )
}

export default Contact
