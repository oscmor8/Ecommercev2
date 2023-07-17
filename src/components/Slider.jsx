import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/slider.css";

function Slider() {
  const [cars, setCars] = useState([]);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    // Fetch the car data from the backend API
    axios
      .get("http://localhost:8000/carsid")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving car data: ", error);
      });
  }, []);

  return (
    <div className="App">
      <Carousel responsive={responsive}>
        {cars.map((car) => (
          <div className="card" key={car.id}>
            <img className="product--image" src={car.images} alt={car.make} />
            <h2 className="make-model">
              {car.make} {car.model}
            </h2>
            <p className="price">Price: ${car.price}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
