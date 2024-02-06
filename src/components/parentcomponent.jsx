import React, { useState } from 'react';
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";


function ParentComponent() {
    const [token, setToken] = useState(null);

    return (
        <div>
          <SignUpForm setToken={setToken} />
          <Authenticate token={token} />
        </div>
      );
    }
    
    export default ParentComponent;