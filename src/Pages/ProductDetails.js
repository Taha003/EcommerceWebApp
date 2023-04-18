import React, { useState } from 'react'
import { useEffect } from 'react'
import { useGlobalContext } from '../Contexts/ProductContext'
import { useGlobalCartContext } from '../Contexts/CartContext'
import { useParams } from 'react-router-dom'
import Hero from '../Components/Hero'
import {FaCartPlus} from 'react-icons/fa'
import {FaSpinner} from 'react-icons/fa'
import './Products.css'


function ProductDetails() {
  let {product,seeProduct,seeMyProduct}=useGlobalContext()
  let [myproducts,setMyProducts]=useState();
  let {addToCart}=useGlobalCartContext()
  let myid=parseInt(useParams().id);

  let getProducts=()=>{
    let filteredProduct=product.find((items)=>items.id ===myid);
    setMyProducts(filteredProduct)
  }
useEffect(()=>{
  getProducts()
})
  if(!myproducts){
  return (
      <div className='h-screen flex justify-center items-center text-blue-500 md:bg-[#DBE9FA]'>
       <div><FaSpinner size={50}/></div>

   
    </div>
    
    
  )
  }
  let {title,description,price,image,id}=myproducts
  return(
    
  <div className=' w-full bg-[#F8F8FF] md:bg-[#F8F8FF]'>
    <div className='max-w-[900px] mx-auto  px-4 py-24'>
      <div className='flex items-center gap-x-4 flex-col md:flex-row'>
      <img src={image} alt="" className='w-[300px] h-[300px]'/>
      <div className='flex mt-2 flex-col'>
          <div className='font-semibold text-lg leading-5 uppercase shadow-sm  max-w-[300px]'> <h2 className='underline-offset-1'>{title}</h2></div>
          <div>
            <div className='flex flex-col gap-y-2 mt-1'>
            <div className='text-gray-500 max-w-[700px] leading-5 text-sm md:text-[18px]'>
            {description}
            </div>
            <div className='text-xl'>Price:<span className='text-red-500 text-xl'> ${price}</span></div>
            <div>
              <button className='border bg-black text-white text-xl px-2 py-2 shadow-sm  hover:mx-2 hover:bg-gray-800 rounded-sm transition-all duration-150' onClick={()=>addToCart(myproducts,id)}>Add To Cart</button>
            </div>

            </div>
          
          </div>
        
        </div>
      </div>
        
        
    

    </div>
  </div>
  )
}

export default ProductDetails