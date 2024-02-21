import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/shopSlice";

const ListItem = ({ image, title, id }) => {
  const { cartItems } = useSelector((store) => store.shop);
  const [isAdded, setIsAdded] = useState(
    cartItems.findIndex((item) => item.id === id) > -1
  );
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (isAdded) {
      dispatch(removeFromCart(id));
      setIsAdded(false);
    } else {
      dispatch(addToCart({ id, image, title }));
      setIsAdded(true);
    }
  };

  return (
    <div className="min-w-[200px] h-[300px] items-center flex flex-col gap-5 border-[1px] border-black rounded-lg overflow-hidden p-4">
      <div className="min-h-[150px] max-h-[150px]">
        <img
          className="w-[100px] min-h-[150px] max-h-[200px]"
          src={image}
          alt={title}
        />
      </div>
      <p className="whitespace-nowrap font-semibold">
        {title.length > 17 ? title.slice(0, 18) + "..." : title}
      </p>
      <button
        onClick={handleAddToCart}
        className="w-full bg-orange-700 text-white py-1.5 rounded-lg hover:bg-orange-900 transition-all"
      >
        {isAdded ? "Remove from cart" : "Add to cart"}
      </button>
    </div>
  );
};

export default ListItem;
