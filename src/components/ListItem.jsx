import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/shopSlice";

const ListItem = ({ image, title, id, price }) => {
  const { cartItems } = useSelector((store) => store.shop);
  let quantity = 0;

  const [isAdded, setIsAdded] = useState(
    cartItems.findIndex((item) => {
      if (item.id === id) {
        quantity = item.quantity;
        return true;
      } else {
        return false;
      }
    }) > -1
  );
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, image, title, price }));
    setIsAdded(true);
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="min-w-[200px] h-[300px] items-center flex flex-col gap-3 border-[1px] border-black rounded-lg overflow-hidden p-4">
      <div className="min-h-[150px] max-h-[150px]">
        <img
          className="w-[100px] min-h-[150px] max-h-[150px]"
          src={image}
          alt={title}
        />
      </div>
      <p className="mb-[-5px]">Price: ${price}</p>
      <p className="whitespace-nowrap font-semibold">
        {title.length > 17 ? title.slice(0, 18) + "..." : title}
      </p>
      <div className="w-full bg-orange-700 text-white rounded-lg  transition-all">
        {isAdded && quantity ? (
          <div className="flex justify-between py-1.5">
            <button className="px-4" onClick={handleRemoveFromCart}>
              -
            </button>
            <p className="cursor-default">{quantity}</p>
            <button className="px-4" onClick={handleAddToCart}>
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="w-full text-center py-1.5 overflow-hidden rounded-lg transition-all hover:bg-orange-900"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ListItem;
