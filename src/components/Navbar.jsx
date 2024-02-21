import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useSelector((store) => store.shop);
  return (
    <div className="text-center px-5 py-8 sm:px-24 flex sm:justify-between font-bold flex-wrap flex-col sm:flex-row">
      <Link className="text-red-600 hover:text-red-400" to="/">
        HOME
      </Link>
      <Link className="text-red-600 hover:text-red-400" to="/favourites">
        FAVOURITES-{cartItems.length}
      </Link>
    </div>
  );
};

export default Navbar;
