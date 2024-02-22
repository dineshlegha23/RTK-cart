import React, { useEffect, useState } from "react";
import ListContainer from "../components/ListContainer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useSelector((store) => store.shop);

  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setTotalAmount(
      cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    );
    setTotalItems(cartItems.reduce((acc, curr) => acc + curr.quantity, 0));
  }, [cartItems]);

  if (cartItems.length < 1) {
    return (
      <h2 className="text-center font-bold mt-10 text-2xl">
        Your cart is empty. Goto{" "}
        <Link to="/" className="text-red-400">
          Home
        </Link>
      </h2>
    );
  }

  return (
    <div className="flex justify-between ml-0 pl-0">
      <ListContainer products={cartItems} />
      <div className="pr-16 mt-16">
        <h2 className="text-red-700 font-bold">YOUR CART</h2>
        Total Items - <p className="font-bold inline">{totalItems}</p>
        <br />
        Total amount -{" "}
        <p className="font-bold inline">${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
