// App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Store_books from './Pages/Store_books';
import BookList from './Pages/BookList';
import Home from './Pages/Home';
import Delete from './Pages/Delete';

const BookApp = () => {
  return (
    <Router>
    <Routes>
    
      <Route path='/register' element={<Registration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path='/api/books' element={<BookList />} />
      <Route path='/insert' element={<Store_books />} />
      <Route path='/delete' element={<Delete />} />
    
    </Routes>
 

    </Router>
   
  );
};



export default BookApp;
