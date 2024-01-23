// SearchComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [title, setTitle] = useState('');
  const [searchResults, setSearchResults] = useState([])
  const [error, setError] = useState(null);


  
  const handleSearch = () => {
    // Send search term to the backend
    axios.get(`http://localhost:3001/api/books/search?title=${title}`)
      .then(response =>{ setSearchResults(response.data.results)
      setError(null);
  })
      .catch(error =>{  
        setError('Error fetching data',error);
        console.error('Error searching books:', error)});
  };
  const handleSearches = () => {
    if (title.trim() !== '') {
      handleSearch();
    }
  };
  return (
    <div >
      {/* className="flex items-center justify-center min-h-screen bg-gray-400" */}
      <br/><br/><br/>
      <h2 className="text-3xl font-bold underline">Book Search</h2>
      <br/>
      <label className='text-2xl font-bold underline'>
        Title:
        <input type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Search books by tittle...'
        />
      </label>
     
      <button onClick={handleSearches} className="bg-blue-600 p-2 rounded-lg shadow-md">Search</button>
<br/>
<br/>
<br/>

      {error && <p>{error}</p>} 

      {searchResults.length > 0 && (
        <div className='inline-block ml-4'>
          <h3 className='text-2xl font-bold underline'>Search Results</h3>
          <ul>
            {searchResults.map(result => (
              <li key={result.id}>
                <strong>Title:</strong> {result.tittle}, <strong>Author:</strong> {result.author}, <strong>Genre:</strong> {result.genre}
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default Search;
