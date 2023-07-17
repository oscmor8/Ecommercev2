import React, { useState } from "react";

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
    <div>
      <input
        type="text"
        placeholder="Filter by make"
        value={makeFilter}
        onChange={handleMakeFilterChange}
      />
      <button onClick={handleFilterClick}>Filter</button>
    </div>
  );
};

export default CarFilter;
