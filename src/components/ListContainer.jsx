import React from "react";
import ListItem from "./ListItem";

const ListContainer = ({ products }) => {
  return (
    <div className="px-16 flex flex-wrap gap-4 justify-center my-16">
      {products.map((product) => (
        <ListItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ListContainer;
