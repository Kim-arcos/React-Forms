import React, { useState } from "react";
import "./Authenticate.css";

const Authenticate = ({ token }) => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleClick = async () => {
    console.log("Button clicked");

    if (!token) {
      setError("Please provide a valid token");
      return;
    }

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="form-container2">
      <h2>Authenticate</h2>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <button className="small-button" onClick={handleClick}>
        Authenticate Token
      </button>
    </div>
  );
};

export default Authenticate;
