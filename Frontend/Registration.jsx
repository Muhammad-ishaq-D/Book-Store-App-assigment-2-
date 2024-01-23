// RegistrationForm.js

import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isReg, setIsReg] = useState(false);

  const handleRegister = async () => {
    try {
      // Make a POST request to your backend registration endpoint
      const response = await axios.post('http://localhost:3001/register', {
        name,
        password,
        email,
      });

      // Handle successful registration response (e.g., redirect to login page)
      console.log('Registration successful:', response.data);
      setIsReg(true);
    } catch (err) {
      // Handle registration error
      setError('Registration failed. Please check your details.');
      console.error('Registration error:', err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md p-8 rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>

        {/* Display error message if registration fails */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Username input */}
        <input
          type="text"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Password input */}
        <input
          type="password"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Confirm Password input */}
        <input
          type="email"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

<div className="text-center">
      {isReg ? (
        <div className="bg-green-200 text-green-800 p-4 rounded-md">
          <p className="font-semibold">Registered!</p>
          <p>You are now Registered.</p>
        </div>
      ) : (
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleRegister}>
          Signup
        </button>
      )}
    </div>
      </div>
    </div>
  );
};

export default Registration;
