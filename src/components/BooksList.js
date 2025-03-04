import { Link } from 'react-router-dom';

const BooksList = ({ books }) => (
  <div className="books-list">
    {books.map((book) => (
      <div key={book.id} className="book-card">
        <Link to={`/book/${book.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={book.formats['image/jpeg']} alt={book.title} />
          <h3>{book.title}</h3>
        </Link>
      </div>
    ))}
  </div>
);

export default BooksList;
