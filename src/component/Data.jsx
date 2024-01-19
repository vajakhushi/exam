import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POST_PRODUCT_PROGRESS } from "../redux-saga/admin/action/action";


const Data = () => {
  const name = useRef()
  const price = useRef()
  const product = useSelector((state) => state.productReducer);

  const dispatch = useDispatch()

  console.log(product, "product from data");

  const handleSubmit =()=>{
    const data = {
      productName:name.current.value,
      price:price.current.value
    }

    dispatch({type:POST_PRODUCT_PROGRESS,payload:data})

    console.log(data);
  }

  return (
    <div>

    <input type="text" name="name" ref={name}/>
    <input type="number" name="price" ref={price} />
    <button onClick={handleSubmit}>Add</button>

      {product.product?.map((val, ind) => {
        return (
          <>
            <h1>{val.productName}</h1>
          </>
        );
      })}
    </div>
  );
};

export default Data;