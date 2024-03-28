import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/shop/shop.jsx";
// import { Cart } from "./pages/cart/cart.jsx";
import { ShopContextProvider } from "./context/shop-context";
import Navbar from "./components/Navbar";
// import LoginForm from "./components/LoginForm";
// import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          {/* <RegisterForm /> */}
          {/* <LoginForm /> */}
          <Routes>
            <Route path="/" element={<Shop />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
