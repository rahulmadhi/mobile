import React, { useState } from "react";
import Cart from "./Cart";

const Product = () => {
  let [count, setCount] = useState(0);

  let handleIncrement = () => {
    setCount(count + 1);
    alert("product added successfully to cart");
  };

  let handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div id="product">
      <span>{count}</span>
      <div id="productcontainer">
        <img
          src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT3OQVCz_QoGzUdjvHuALIRKGGxPglz8xse7exMo-EcDwtKq-6Ew__H_IQDkRjhz-49cmEMHANjLW5lfXZvcT1Pw9cmmLga_Jkf0a5hxbll9lKaWj8sImBsxioYZDfcfUZl7kI95nM&usqp=CAc"
          alt=""
        />
        <div>
          <h3>Name :Iphone 18 pro max </h3>
          <h3>Price : 1,20,000</h3>
        </div>
        <div id="btn">
          <button onClick={handleDecrement}>-</button>
          <h2>{count}</h2>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
      <Cart countdata={count} />
    </div>
  );
};

export default Product;
