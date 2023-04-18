import React from 'react'
import {FaCartPlus,FaEye} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ProductDetails from '../Pages/ProductDetails'
import { useGlobalCartContext } from '../Contexts/CartContext'
import { useGlobalContext } from '../Contexts/ProductContext'
function Product({mydata}) {
    let {id,title,image,price,description}=mydata
    let {addToCart}=useGlobalCartContext()
    let {product,seeProduct}=useGlobalContext()

  return (
    <div key={id} className=' my-2 lg:w-72 border  h-full flex flex-col s  relative justify-center  mx-auto overflow-hidden group transition opacity-85 hover:opacity-100 bg-[#ffff] w-44 hover:shadow-lg'>
                        <Link to={`product/${id}`} className='flex justify-center items-center border-b'>
                        <img src={image} className='md:w-[70%] md:h-[70%]  hover:scale-125 duration-200 cursor-zoom-in  bg-transparent w-[80%] h-[80%]'/>
                        
                        </Link>
                        <div className='flex flex-col items-start ml-2 justify-start mb-2'>
                        <div className=''>
                            <Link to={`product/${id}`} className='hover:underline'>
                            <h3 className='font-light leading-5 py-4'>{title}</h3>
                            </Link>
                        </div>
                        <div className='absolute bottom-1'>
                        <p className='font-bold text-red-500 text-xl'>${price}</p>
                        </div>
                        
                       
                        <div className='absolute top-5 -right-11  bg-yellow-500/20 opacity-0 transition-all group-hover:opacity-[200] group-hover:right-5'>
                            <div className=' border flex flex-col items-center my-1 mx-1 gap-y-2'>
                            <button className=' bg-yellow-500 text-black p-1 hover:translate-x-[-1px] drop-shadow-xl' onClick={()=>addToCart(mydata,id)}><FaCartPlus size={35}/></button>
                            <Link to={`product/${id}`}>
                            <button className='text-blue-500 bg-white p-1 drop-shadow-xl' onClick={()=>seeProduct(id)}>
                            <FaEye size={35}/>
                            </button>
                            </Link>
                            
                            </div>
                            
                           
                            
                        </div>
                        </div>
                      
                  
                    </div>
                    
  )
}

export default Product