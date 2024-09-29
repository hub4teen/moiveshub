import React from 'react';

// SearchBar Component
const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      style={styles.searchInput}
    />
  );
};

// Styles for the SearchBar
const styles = {
  searchInput: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '250px',
    marginLeft: '20px',
    fontSize: '16px',
  },
};

export default SearchBar;
