import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../state/cart/cartSlice";
import { v4 as uuidV4 } from "uuid";

function Cart() {
  const cartList = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [total, setTotal] = useState()

  useEffect(()=>{
   let tempTotal = 0;
   for(let i=0; i<cartList.length; i++){
    const currPrice = Number(cartList[i].price)
    tempTotal = tempTotal+currPrice
   }
   setTotal(tempTotal);
   tempTotal = 0;
  }, [cartList])

  
  const result = Object.values(cartList.reduce((acc, curr) => {
    const key = curr.id;
    if (!acc[key]) {
        // If this id doesn't exist in the accumulator, create it
        acc[key] = { ...curr, amount: 1 };
    } else {
        // If it exists, just increment the amount
        acc[key].amount += 1;
    }
    return acc;
}, {}));



  return (
    <div>
      <h1>Cart</h1>
      <h2>Total Price: {total}</h2>
      <div className="cart-super-container">
        {result.map((item) => (
          <div className="cart-container" key={uuidV4()}>
            <span>
              {item.name} {item.amount}x{item.price}{" "}
              <button onClick={() => dispatch(removeItem(item.id))}>
                Remove
              </button>
            </span>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
