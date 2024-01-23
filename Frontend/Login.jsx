// LoginForm.js

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
   
    try {
      // Make a POST request to your backend login endpoint
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });
       
      // Handle successful login response (e.g., store user token in state or localStorage)
      console.log('Login successful:', response.data);
      setIsLoggedIn(true);
    } catch (err) {
      // Handle login error
      setError('Login failed. Please check your credentials.');
      console.error('Login error:', err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md p-8 rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        {/* Display error message if login fails */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Username input */}
        <input
          type="email"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password input */}
        <input
          type="password"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />


<div className="text-center">
      {isLoggedIn ? (
        <div className="bg-green-200 text-green-800 p-4 rounded-md">
          <p className="font-semibold">Login Successful!</p>
          <p>You are now logged in.</p>
        </div>
      ) : (
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleLogin} id='loginButton'>
           Login
        </button>
      )}
    </div>
        
      </div>
      
    </div>
    
  );
  
};

export default Login;
