import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/footer";
import Header from "../components/header";
import ProductsDb from "../components/ProductCards";
import ProductHeroImg from "../components/ProductHeroImg";
import CarFilter from "../components/filter";

const Products = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    // Fetch the car data from the backend API
    axios
      .get("https://ecombackend-7ju3.onrender.com/cars") // Add the protocol
      .then((response) => {
        setCars(response.data);
        setFilteredCars(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving car data: ", error);
      });
  }, []);
  console.log("Cars:", cars);

  return (
    <>
      <Header />
      <ProductHeroImg />
      <CarFilter cars={cars} setFilteredCars={setFilteredCars} />
      <ProductsDb cars={filteredCars} />
      <Footer />
    </>
  );
};

export default Products;
