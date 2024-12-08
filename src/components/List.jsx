import React from "react";
import { PRODUCTS } from "../PRODUCTS.JS";
import { v4 as uuidV4 } from "uuid";
import { useDispatch } from "react-redux";
import { addItem } from "../state/cart/cartSlice";

function List() {
  const dispatch = useDispatch();

  function handleAdd(product){
    dispatch(addItem(product))
  }
  return (
    <div>
      {PRODUCTS.map((product) => (
        <div key={uuidV4()} className="product">
          <h3>{product.name}</h3>
          <span><b>Price: {product.price}</b></span>
          <button onClick={()=>handleAdd(product)}>Add</button>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
}

export default List;
