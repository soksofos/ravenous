import React from "react";
import { ReactDOM } from "react-dom/client";
import './business.css';


const owl = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  };


<div class="row">
  <div class="column"></div>
  <div class="column"></div>
</div>


  function Business() {
    return (
      <div>
        <img
          src={owl.imageSrc}
          alt={owl.name}
        />
        <h1>{owl.name}</h1>
        <div className="row">
            <div className="column">
                <h2>{owl.address}</h2>
                <h2>{owl.city}</h2>
                <h2>{owl.state}</h2>
                <h2>{owl.zipCode}</h2>
            </div>
                <div className="column">
                <h2>{owl.category}</h2>
                <h2>{owl.rating}</h2>
                <h2>{owl.reviewCount}</h2>      
            </div>
        </div>
      </div>
    )
  };


  export default Business