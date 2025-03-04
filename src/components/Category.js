import { useEffect, useState } from 'react';
import axios from 'axios';
import BooksList from './BooksList';

const Category = ({ category }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchCategoryBooks = async () => {
      console.log('Selected category:', category); // Debugging step
      try {
        const res = await axios.get(`https://gutendex.com/books/?topic=${category}`);
        console.log('API response:', res.data); // See the actual response
        setBooks(res.data.results);
      } catch (error) {
        console.error('Error fetching category books:', error);
      }
    };
    fetchCategoryBooks();
  }, [category]);

  return <BooksList books={books} />;
};

export default Category;
