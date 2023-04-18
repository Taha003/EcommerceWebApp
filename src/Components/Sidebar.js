import React from 'react'
import { useGlobalSidebarContext } from '../Contexts/SidebarContext'
import {BiExit} from 'react-icons/bi'
import { useGlobalCartContext } from '../Contexts/CartContext'
import { FaPlusSquare } from "react-icons/fa";
import {FaMinusSquare,FaEye} from "react-icons/fa";
import { Link } from 'react-router-dom';
function Sidebar() {
    //getting cart context
    let {cart,noOfItems,deleteCartItem,clearCartItem,addcartItem,total}=useGlobalCartContext();
    //getting sidebar context i.e in sidebar context open and closing sidebar functionality is written
    let {isSidebarOpen,closeSidebar,OpenSidebar}=useGlobalSidebarContext();
    
  return (
        <>
        <div className={`w-full top-0 fixed bg-white h-[100vh]
             transition-all duration-300 z-20 sm:w-[25vw] md:w-[35vw] ${isSidebarOpen?'right-0':'-right-full'} overflow-y-auto`}>
            <div className='flex justify-between items-center px-2 py-1 underline-offset-2 bg-slate-300'>
                <div className=''>
                    <h4 className='text-xl text-blue-950'>Cart Items ({noOfItems})</h4>
                </div>
            <div className='cursor-pointer'>
                <BiExit size={40} onClick={closeSidebar}/>
            </div>
            </div>
           <div>
           {cart && cart.map((item)=>{
            let {id,title,image,price,description,amount}=item
                return <div key={id} className='flex justify-between items-center py-4 px-2'>
                       
                        <ul className='text-blue-500 list-none flex gap-2'>
                        <li className='mx-2'><img src={image} width={'35px'}/></li>
                        
                            <li className='flex flex-col text-gray-500 max-w-[240px]  hover:cursor-pointer'><div className='hover:underline'>{title} 
                            </div>
                            <li className='flex flex-row  border  items-center  py-1 w-[50%] justify-center'>
                            {/* <div>
                                <Link to={`/product/${id}`}>
                                <FaEye size={17}/>
                                </Link>
                            
                            </div> */}
                            <div className=''><button onClick={()=>addcartItem(id)} className='border-r text-center text-2xl px-2 hover:text-black'>+</button></div>
                            <div className='text-xl px-2'>
                                {amount}
                            </div>
                            <div className=''><button onClick={()=>deleteCartItem(id,amount)} className="font-semibold text-2xl border-l px-2 hover:text-black">-</button></div>
                            </li>
                            
                            </li>
                            
     
                        </ul>
                        <div className='text-red-500 flex flex-col justify-center items-center mx-2'>
                            <button className='text-gray-700 text-xl hover:text-red-500' onClick={()=>clearCartItem(id)}>x</button>
                        <div> {parseFloat((price*amount)).toFixed(2)}</div>
                        </div>
                       
                    </div>
           })}
           
          
           </div>
           <div className='inset-x-0  py-4 flex justify-between items-center border-t-2 border-gray-500 px-4 bg-red-200'>
          <div className='text-red-500'>Total Amount</div>
         <div className='text-black text-xl'>$ {parseFloat(total).toFixed(2)}</div>
         
     </div>
           </div>
           
          
          
        
         
        </>
         
  )
}

export default Sidebar