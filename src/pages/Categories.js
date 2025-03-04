import { useState } from 'react';
import Category from '../components/Category';

const categories = [
  'Fiction', 'Mystery', 'Thriller', 'Romance', 'Fantasy',
  'Morality', 'Society', 'Power', 'Justice', 'Adventure',
  'Tragedy', 'War', 'Philosophy'
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div>
      <h2>Book Categories</h2>
      <div className="category-menu">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category.toLowerCase())}
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory && <Category category={selectedCategory} />}
    </div>
  );
};

export default Categories;
