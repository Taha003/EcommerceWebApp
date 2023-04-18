import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom'

let ProductContext=React.createContext();

let ProductProvider=({children})=>{
    let [product,setProduct]=useState([]);
    let [seeMyProduct,setSeeMyProduct]=useState([]);
    let id=useParams().id
    console.log(id)
  
    const getProducts=async()=>{
        let res=await fetch('https://fakestoreapi.com/products')
        let data=await res.json()
        setProduct(data)
    }
    useEffect(()=>{
        getProducts()
    },[])
    const seeProduct=(id)=>{
        let filteredtProduct=product.filter((items)=>items.id===id);
        setSeeMyProduct(filteredtProduct)
    }
    return (
        <ProductContext.Provider value={{product,seeProduct,seeMyProduct}}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductProvider,ProductContext}

let useGlobalContext=()=>{
    return useContext(ProductContext)
}
export {useGlobalContext}