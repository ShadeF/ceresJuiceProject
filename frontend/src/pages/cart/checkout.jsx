// Checkout.jsx
import React, { useState, useContext } from "react";
import { ShopContext } from "../../context/shop-context"; // Adjust the import path as necessary
import "./checkout.css";

// Hardcoded customer data
const customers = {
 "1234567890": "John Doe",
 "0987654321": "Jane Smith",
 // Add more customers as needed
};

const Checkout = () => {
    const { checkout } = useContext(ShopContext); // Destructure only what you need
    const [phoneNumber, setPhoneNumber] = useState("");
    const [customerName, setCustomerName] = useState("");

    const handlePhoneNumberChange = (e) => {
        const enteredPhoneNumber = e.target.value;
        setPhoneNumber(enteredPhoneNumber);
        // Look up the customer's name based on the entered phone number
        const name = customers[enteredPhoneNumber] || "Customer Not Found";
        setCustomerName(name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can process the transaction with the phone number
        // For now, let's just clear the cart
        checkout();
        // Show an alert indicating the purchase was successful
        alert("Purchase successful!");
    };

    return (
        <div className="checkout-form">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    required
                />
                <p>Customer Name: {customerName}</p>
                <button type="submit">Checkout</button>
            </form>
        </div>
    );
};

export default Checkout;
