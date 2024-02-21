import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProducts } from "../store/shopSlice";
import ListContainer from "../components/ListContainer";

const Home = () => {
  const { products } = useSelector((store) => store.shop);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch(addProducts(data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1 className="text-center text-5xl mt-10">Loading...</h1>;
  }

  return <ListContainer products={products} />;
};

export default Home;
