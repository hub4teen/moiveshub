import React, { useState } from 'react';
import SearchBar from './SearchBar';  // Import the SearchBar component

const NavBar = ({ searchTerm, onSearchChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.navTitle}>Movie Container</h2>
      
      {/* Hamburger menu icon */}
      <button onClick={toggleMenu} style={styles.hamburger}>
        &#9776;
      </button>

      {/* Navigation Links */}
      <div style={{ ...styles.navLinks, display: isMenuOpen ? 'flex' : 'none' }}>
        <a href="#best-movies" style={styles.navLink}>Best Movies</a>
        <a href="#new-movies" style={styles.navLink}>New Movies</a>
        <a href="#follow-us" style={styles.navLink}>Follow Us</a>
      </div>

      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
    </nav>
  );
};

// Styles for NavBar
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '10px 20px',
    color: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    flexWrap: 'wrap',
  },
  navTitle: {
    fontSize: '1.5rem',
    margin: 0,
  },
  navLinks: {
    flexDirection: 'column', // Change to column for better mobile layout
    position: 'absolute',    // Position the menu absolutely
    top: '60px',             // Below the navbar
    left: '0',
    backgroundColor: '#333', // Same background as navbar
    width: '100%',           // Full width on mobile
    padding: '10px 0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add some shadow for separation
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '10px 20px',  // More padding for easier clicking
    textAlign: 'center',    // Center align for mobile
    display: 'block',       // Each link takes full width
  },
  hamburger: {
    display: 'block', // Show on mobile
    fontSize: '30px',
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    marginLeft: 'auto', // Align hamburger to the right
  },
};

export default NavBar;
