import React, { useState } from 'react';

const Favorites = () => {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  
    const removeFavorite = (id) => {
      const updatedFavorites = favorites.filter((book) => book.id !== id);
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };
  
    return (
      <div>
        {favorites.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <button onClick={() => removeFavorite(book.id)}>Remove</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Favorites;
  