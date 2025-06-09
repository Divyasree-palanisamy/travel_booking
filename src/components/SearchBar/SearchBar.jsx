import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log({ destination, date, travelers });
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-group">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Where to?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
      </div>
      <div className="search-group">
        <FaCalendarAlt className="search-icon" />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="search-group">
        <FaUsers className="search-icon" />
        <select
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? 'Traveler' : 'Travelers'}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
};

export default SearchBar;