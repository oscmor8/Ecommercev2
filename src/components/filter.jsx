import React, { useState } from "react";
import "../styles/filter.css";

const CarFilter = ({ cars, setFilteredCars }) => {
  const [makeFilter, setMakeFilter] = useState("");

  const handleMakeFilterChange = (event) => {
    setMakeFilter(event.target.value);
  };

  const handleFilterClick = () => {
    const filteredCars = cars.filter((car) =>
      car.make.toLowerCase().includes(makeFilter.toLowerCase())
    );
    setFilteredCars(filteredCars);
  };

  return (
    <div className="filters">
      <input
        type="text"
        className="inputEmail"
        placeholder="Filter by make"
        value={makeFilter}
        onChange={handleMakeFilterChange}
      />
      <button className="product-btn" onClick={handleFilterClick}>
        Filter
      </button>
    </div>
  );
};

export default CarFilter;
