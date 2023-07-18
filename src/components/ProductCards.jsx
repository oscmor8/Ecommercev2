import React from "react";
import "../styles/productcards.css";

const ProductsDb = ({ cars }) => {
  return (
    <>
      <section className="products-cards">
        {cars.map((car) => (
          <div className="product" key={car.car_id}>
            <img src={car.images} alt={car.make} />
            <p className="title-products">
              {car.make} {car.model} {car.year}
            </p>
            <p className="description-products">{car.description}</p>
            <p className="price-products">
              <span>${car.price}</span>
            </p>
            <button className="btn-products btn1">Add to cart</button>
          </div>
        ))}
        {/* Add empty divs to maintain the same size for all cards */}
        {cars.length === 0 && <div className="product empty"></div>}
      </section>
    </>
  );
};

export default ProductsDb;
