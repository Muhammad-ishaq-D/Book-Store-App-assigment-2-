import React, { useState } from 'react';
import axios from 'axios';


const Delete = () => {
  const [bookId, setBookId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setBookId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(`http://localhost:3001/delete?id=${bookId}`);
      setSuccessMessage(`Book deleted: ${response.data.title}`);
      setError(null);
    } catch (error) {
      setSuccessMessage('');
      setError('Error deleting book');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-4">Book Delete App</h1>
      <form onSubmit={handleSubmit} className="max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookId">
            Book ID:
          </label>
          <input
            type="text"
            name="bookId"
            value={bookId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSubmit}
        >
          Delete Book
        </button>
      </form>

      {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default Delete;
