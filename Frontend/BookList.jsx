// SearchComponent.js
import React, { useEffect,useState } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the backend
    axios.get('http://localhost:3001/api/books')
      .then(response => setBooks(response.data.books))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <h2 className='text-3xl font-bold underline'>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>Title:</strong> {book.tittle}, <strong>Author:</strong> {book.author}, <strong>Genre:</strong> {book.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
