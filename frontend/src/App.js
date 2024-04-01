import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Importing BrowserRouter and Link

import { Shop } from "./pages/shop/shop.jsx";
// import { Cart } from "./pages/cart/cart.jsx";
import Cart from "./pages/cart/cart.jsx";
import Checkout from "./pages/cart/checkout.jsx";
import { ShopContextProvider } from "./context/shop-context";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router> {/* Corrected the typo from BrowseRouter to BrowserRouter */}
          <Navbar />
          {/* <RegisterForm /> */}
          {/* <LoginForm /> */}
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
            <Route path="cart" element={<Cart />} />
            <Route path="shop" element={<Shop />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
