import { useEffect, useState } from 'react';
import axios from 'axios';
import BooksList from '../components/BooksList';
import SearchBook from '../components/SearchBook';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPopularBooks = async () => {
      try {
        setLoading(true);
        const res = await axios.get('https://gutendex.com/books/?sort=downloads');
        setBooks(res.data.results);
      } catch (error) {
        console.error('Error fetching popular books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularBooks();
  }, []);

  return (
    <div>
      <h2>Search for a Book</h2>
      <SearchBook setSearchResults={setSearchResults} />
      
      {searchResults.length > 0 ? (
        <>
          <h3>Search Results</h3>
          <BooksList books={searchResults} />
        </>
      ) : (
        <>
          <h3>Popular Books</h3>
          {loading ? <p>Loading...</p> : <BooksList books={books} />}
        </>
      )}
    </div>
  );
};

export default Home;
