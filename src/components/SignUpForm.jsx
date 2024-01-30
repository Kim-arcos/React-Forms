import React, { useState } from 'react';
import './Authenticate.css';


function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted");
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
    } catch (error) {
      setError(error.message);
    }
  };


return (
  <div className="form-container">
    <h2>Sign Up</h2>
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
  