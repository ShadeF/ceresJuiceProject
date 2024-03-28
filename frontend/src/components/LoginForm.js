import React from "react";
import "../LoginForm.css";

function LoginForm() {
  return (
    <section>
      <div className="imgBx">
        <img src="/juice4.jpg" alt="Ceres Fruit Juice" />
        <div className="introText">
          <h1>
            Ceres <span>Juice</span>
          </h1>
        </div>
      </div>
      <div className="contentBx">
        <div className="formBx">
          <h2>Cashier Log In</h2>
          <p className="intro">
            Log in to access cashier dashboard and manage transactions
            efficiently.
          </p>
          <form>
            <div className="inputBx">
              <span>Username</span>
              <input type="text" name="username" />
            </div>

            <div className="inputBx">
              <span>Password</span>
              <input type="password" name="password" />
            </div>

            <select name="branch">
              <option value="">Select Branch</option>
              <option value="Nairobi">Nairobi</option>
              <option value="Mombasa">Mombasa</option>
              <option value="Headquarters">Headquarters</option>
            </select>

            <div className="inputBx">
              <button type="submit">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
