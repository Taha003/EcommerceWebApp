import React,{useContext,useEffect,useState} from 'react'
import { useGlobalContext } from './ProductContext';
const CartContext=React.createContext();

const CartProvider=({children})=>{
  //setting global context hook
  let {product}=useGlobalContext();
  //setting cart
  let [cart,setCart]=useState([]);
  //initially number of cart items
  let [noOfItems,setnoOfItems]=useState(0)
  //managing total amount
  let [total,setTotal]=useState(0);
  useEffect(()=>{
    // addcartItem()
    // totalAmount()
    sumAmount()
    sumHeaderItems()
  },[cart])
  //defining function on onclick of add to cart btn
  const addToCart=(mydata,id)=>{
    //setting upthe objecy here my data is the product object that we clicked on and the destructring the object
    //and initially adding up amount to 1
    let newItems={...mydata,amount:1};
    //here returning only that object which have cart id equal to current cart object id
    //means clicking to times add to cart on same btn
    let cartItems=cart.find((items)=>{
      return items.id===id
    });
    //and if cart items are present then upating the amount of that item which is clicked two times on add two cart if id matches with the clicked id and if not then simply returning the item
    if(cartItems){
      let updatedItems=cart.map((items)=>{
        if(items.id===id){
          return {...items,amount:cartItems.amount+1}
        }
        else{
          return items
        }
      })
      setCart(updatedItems);
      console.log(cart)
      setnoOfItems(cart.length+1);
      console.log(noOfItems)
    }
    else{
      setCart([...cart,newItems])
    }
    
  }
  //adding on plus sign cart Item
  const addcartItem=(id)=>{
    let newCartItems=[...cart].map((items)=>{
      let {amount}=items
      if(items.id===id){
        return {...items,amount:amount+1}
      }
      else{
        return items
      }
    })
    setCart(newCartItems)
  }
  //removing on minus sign cart item
  const deleteCartItem=(id,amount)=>{
    if(amount>1){
      let newCartItems=[...cart].map((items)=>{
        let {amount}=items
        if(items.id===id){
          return {...items,amount:amount-1}
        }
        else{
          return items
        }
      })
      setCart(newCartItems)
    }
    else{
      let filteredItems=[...cart].filter((items)=>items.id!==id);
      setCart(filteredItems)
    }
  }
  //for total sum of amount in sidebar
  const totalAmount=cart.map((items)=>{
    return items.price*items.amount
  })
  let sumAmount=()=>{
    let sum=totalAmount.reduce((acc,curr)=>{
        return acc+curr
    },0)
    setTotal(sum)
  }
  //total number of cart items for header
  const headerItems=cart.map((items)=>{
    return items.amount;
  })
  console.log(headerItems)
  const sumHeaderItems=()=>{
    let sumHeader=headerItems.reduce((acc,curr)=>{
      return acc+curr
    },0)
    setnoOfItems(sumHeader)
  }
  //clearing the cart items
  const clearCartItem=(id)=>{
    let filteredCart=cart.filter((items)=>items.id!==id);
    setCart(filteredCart)
  }

  return (
    <CartContext.Provider value={{addToCart,cart,noOfItems,addcartItem,deleteCartItem,total,clearCartItem}}>
      {children}
    </CartContext.Provider>
  )
}

export {CartProvider};

export const useGlobalCartContext=()=>{
  return useContext(CartContext)
}