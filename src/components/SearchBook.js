import { useState } from 'react';
import axios from 'axios';

const SearchBook = ({ setSearchResults }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const getBooks = async (e) => {
    e.preventDefault();
    if (!input) return;

    try {
      setLoading(true);
      const res = await axios.get(`https://gutendex.com/books/?search=${input}`);
      setSearchResults(res.data.results || []);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={getBooks}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search books..."
      />
      <button type="submit">Search</button>
      {loading && <p>Searching...</p>}
    </form>
  );
};

export default SearchBook;
