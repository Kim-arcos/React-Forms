import React, { useState } from 'react';
import './Authenticate.css';


function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted");

    if (username.length < 4) {
      setError("Username should be at least 4 characters long");
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters long");
      return;
    }

    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log(data);
      setToken(data.token);
      setSuccessMessage("Sign up successful!"); 
    } catch (error) {
      setError(error.message);
    }
  };


return (
  <div className="form-container">
    <h2>Sign Up</h2>
    {error && <p>{error}</p>}
    {successMessage && <p>{successMessage}</p>}
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          />
        </label>
        <br/>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br/>
        <button className= "small-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;
  