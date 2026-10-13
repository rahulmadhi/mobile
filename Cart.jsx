import React from "react";

const Cart = props => {
  return (
    <div id="cartcontainer">
      <h2>Name : iphone 18 pro max</h2>
      <h2>Price : 1,20,000</h2>

      <h3>Specs : </h3>
      <ul>
        <li>12GB RAM || 512 GB ROM</li>
        <li>17.53 cm (6.9 Inch) Quad HD+ display</li>
        <li>5000 mAh battery</li>
        <li>Mac Processor</li>
      </ul>

      <div>
        <h2>Quantity {props.countdata} X 120000</h2>
        <h3>TOTAL PRICE :{props.countdata * 120000} </h3>
        <button>BUY</button>
      </div>
    </div>
  );
};

export default Cart;
