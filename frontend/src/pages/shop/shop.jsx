import React from "react";
import { PRODUCTS } from "../../JuiceProducts";
import { Product } from "./product";
import "./shop.css";
// import Navbar from "../../components/Navbar";

export const Shop = () => {
  return (
    <div className="shop">
      {/* <Navbar /> */}
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


// import React from "react";
// import { PRODUCTS } from "../../JuiceProducts";
// import { Product } from "./product";
// import Navbar from "../../components/Navbar"; // Adjust the import path
// import "./shop.css";

// export const Shop = () => {
//   return (
//     <div className="shop">
//       <Navbar /> {/* Include the Navbar component */}
//       <div className="shopTitle">
//         <h1>Juice Flavors</h1>
//       </div>

//       <div className="products">
//         {PRODUCTS.map((product) => (
//           <Product data={product} />
//         ))}
//       </div>
//     </div>
//   );
// };
