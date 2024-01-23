import React, { useState } from 'react';
import axios from 'axios';

const Store_books = () => {
  const [tittle, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(null);
  

  const handleCreateBook = async () => {
    try {
      const response = await axios.post('http://localhost:3001/insert', {
        tittle:(""),
        author,
        genre,
      });

      setSuccessMessage(`Book created: ${response.data.author}`);
      setError(null);
    } catch (error) {
      setSuccessMessage('');
      setError('Error creating book');
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold underline">Book Create App</h1>
      <br/>
      <br/>
      <br/>

      <label className="text-2xl font-bold underline">Title:</label>
      <input  className="w-onethird p-2 mb-6 border rounded-md focus:border-blue-800"
      type="text" value={tittle} onChange={(e) => setTitle(e.target.value)} />
<br/>
<br/>
      <label className="text-2xl font-bold underline" >Author:</label>
      <input  className="w-half p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-800"
      type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
<br/>
<br/>
      <label className="text-2xl font-bold underline"> Genre:</label>
      <input  className="w-half p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-800"
      type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
      <br/>
      <br/>
      <br/>

        <button className="bg-blue-500 text-white px-30 py-2 rounded-md" onClick={handleCreateBook}>
           Register Yourself
        </button><br/>
<div>
      {successMessage && <p  className="text-2xl font-bold underline">{successMessage}</p>}
      {error && <p  className="text-2xl font-bold underline">{error}</p>}
      </div>
    </div>
  );
};

export default Store_books;
