import React from "react";
import { PRODUCTS } from "../../JuiceProducts";
import { Product } from "./product";
import "./shop.css";
import Navbar from "../../components/Navbar"; // Adjust the import path

export const Shop = () => {
  return (
    <div className="shop">
      <div className="navbar-container">
        <Navbar /> {/* Include the Navbar component */}
      </div>
      <div className="shopTitle">
        <h1>Juice Flavors</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} /> // Add key prop here
        ))}
      </div>
    </div>
  );
};
