import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  let totalPopulation = 0;
  for (let i = 0; i < cart.length; i++) {
    const country = cart[i];
    totalPopulation = totalPopulation + country.population;
  }
  return (
    <div className="cart">
      <h3>Added Country:{cart.length}</h3>
      <h4>Added Population:{totalPopulation}</h4>
    </div>
  );
};

export default Cart;
