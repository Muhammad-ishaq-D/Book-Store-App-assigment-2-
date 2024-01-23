// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Components/Search';

const Home= () => {
  return (
    <div>
      <h2 className="text-3xl font-bold underline">Welcome to the Book Storage App</h2>
      <br/><br/>
      <p className="text-1xl font-bold">
        Explore our collection of books, search for your favorites, and register/login to access additional features.
      </p>
      <br/>
      <nav className="bg-gray-800 p-14">
      

      <div className="hidden lg:flex space-x-8">
          <Link to="/api/books" className="text-green-600 font-bold hover:text-gray-300 ">View Books</Link>
          <Link to="/insert" className="text-green-600 font-bold hover:text-gray-300 ">Store Book</Link>
          <Link to="/delete" className="text-green-600 font-bold hover:text-gray-300 ">Delete Books</Link>
          <Link to="/register" className="text-green-600 font-bold hover:text-gray-300">Register</Link>
          <Link to="/login" className="text-green-600 font-bold hover:text-gray-300">Login</Link>
   <Search /> 
           
  

        </div>
       
      </nav>
      
    </div>
  );
};

export default Home;
