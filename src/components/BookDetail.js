import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`https://gutendex.com/books/${id}`);
        setBook(res.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some((fav) => fav.id === book.id)) {
      localStorage.setItem('favorites', JSON.stringify([...favorites, book]));
      alert(`${book.title} added to favorites!`);
    } else {
      alert('This book is already in your favorites.');
    }
  };

  if (loading) return <p>Loading book details...</p>;
  if (!book) return <p>Book not found.</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      {book.formats['image/jpeg'] && <img src={book.formats['image/jpeg']} alt={book.title} />}
      <p><strong>Author(s):</strong> {book.authors.map(a => a.name).join(', ')}</p>
      <p><strong>Downloads:</strong> {book.download_count}</p>
      <p><strong>Language:</strong> {book.languages.join(', ')}</p>
      <p><strong>Read online:</strong> <a href={book.formats['text/html']} target="_blank" rel="noopener noreferrer">Click here</a></p>
      <button onClick={addToFavorites}>Add to Favorites</button>
    </div>
  );
};

export default BookDetail;
