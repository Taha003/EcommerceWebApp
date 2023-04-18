import React, { useEffect, useState } from 'react'
import { useGlobalSidebarContext } from '../Contexts/SidebarContext'
import { BiShoppingBag } from "react-icons/bi";
import { useGlobalCartContext } from '../Contexts/CartContext';

function Header() {
    let {isSidebarOpen,closeSidebar,OpenSidebar,setSidebarOpen}=useGlobalSidebarContext();
  let { addToCart, cart, noOfItems, total, deleteCartItem }=useGlobalCartContext()
  let [header,setHeader]=useState(false)
  // let changeColorOnScroll=()=>{
  //   console.log('scroll')
  //   setHeader(window.scrollY)  
  // }

//   useEffect(()=>{

//    window.addEventListener('scroll',changeColorOnScroll);
//   return()=>{
//     console.log('clenup')
//     window.removeEventListener('scroll',changeColorOnScroll)
//   };
// },[])
useEffect(()=>{
  console.log('scroll')
  window.addEventListener('scroll',()=>{
    window.scrollY>60?setHeader(true):setHeader(false)
  })
},[])
  return (
    <div className={`${header?'bg-white py-2 shadow-md':'bg-none py-2' } px-4 fixed transition-all z-10 w-full mx-auto `}>
        <div className='max-w-[1240px] mx-auto flex justify-between'>
    <h4 className='text-3xl font-extralight text-black'><span className='text-amber-600 font-extrabold text-4xl'>My</span>Store<span className='text-black font-bold'>..</span></h4>
        
    <div className='relative'>
      <div >
<BiShoppingBag size={40} className='mt-2 cursor-pointer' onClick={()=>setSidebarOpen(!isSidebarOpen)}/>
      </div>
    <div className='border   text-black border-yellow-300 bg-amber-300 -right-2 -bottom-2 text-center absolute rounded-full w-[20px] h-[20px] text-sm flex items-center justify-center'>{noOfItems}</div>

    </div>

      

    </div>
    </div>
  )
}

export default Header

