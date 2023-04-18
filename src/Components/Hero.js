import React from 'react'
import HeroImg from '../Assets/Hero Img.png'
import Typed from 'react-typed'
import {AiOutlineLine} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='w-full bg-[#F3E5AB] md:h-[700px] bg-no-repeat h-[500px] shadow-2xl'>
      <div className='max-w-[1140px] mx-auto  px-10 py-32'>
       <div className='container flex h-full justify-center items-center gap-y-4'>
        <div>
        <div className='font-semibold flex items-center justify-center mx-auto uppercase'>
          <AiOutlineLine className='text-red-500' size={50}/>
          <div>New </div><span className='ml-2'>Collection</span>
            
          </div>
         
          <div className='text-4xl'>
            <div className='leading-10 w-10'>
              AUTUM STYLISH COLLECTION FOR<br/><span className='font-bold'><Typed strings={['WOMEN','MEN','KIDS']} typeSpeed={120} loop/></span>
            </div>

          </div>
          <Link to={'/'} className='font-semibold border-b-2 border-black hover:border-red-500 transition-all duration-300 hover:ml-4 uppercase'>Discover More</Link>
        </div>
        <div className='md:block hidden'>
          
            <div>
            <img src={HeroImg} alt=""/>
            </div>
         
          
        
        
        </div>
       </div>
      </div>
      </div>
  )
}

export default Hero