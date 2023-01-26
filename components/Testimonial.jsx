import React from 'react'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {Testimonials} from "../public/Data"
import Image from "next/image"



function Testimonial() {
  
  return (
    <>
     <div className='w-[80%] mx-auto p-4'>
        <div><h3  className='text-[#A4E2FE] font-extrabold mb-0'>Social</h3>
        <h1 className='text-2xl text-[#010D82] font-extrabold leading-[45px]'>What do our customers say</h1></div>

        <div>

          

        </div>
       </div>
    </>
  )
}

export default Testimonial