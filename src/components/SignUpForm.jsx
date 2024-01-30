import React, { useState } from 'react';

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


const handleUsernameChange = (event) => {
  setUsername(event.target.value);
};

const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};

const handleSubmit = (event) => {
  event.preventDefault();
  // Form submission logic
};

  return (
     <div>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  }

export default SignUpForm;
  