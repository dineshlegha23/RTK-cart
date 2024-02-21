import React from "react";
import ListContainer from "../components/ListContainer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const { cartItems } = useSelector((store) => store.shop);

  if (cartItems.length < 1) {
    return (
      <h2 className="text-center font-bold mt-10 text-2xl">
        No products here. Goto{" "}
        <Link to="/" className="text-red-400">
          Home
        </Link>
      </h2>
    );
  }

  return <ListContainer products={cartItems} />;
};

export default Favourites;
