import React, { useState } from 'react';
import NavBar from './NavBar';  // Import the NavBar component
import MovieCard from './MovieCard';  // Import the MovieCard component

// Main App Component
function App() {
  const moviesData = [
    {
      title: 'Inception',
      poster: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg'
    },
    {
      title: 'Interstellar',
      poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
    },
    {
      title: 'The Dark Knight',
      poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
    },
    {
      title: 'Parasite',
      poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Filter movies based on search term
  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <NavBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* Best Movies Section */}
      <h2 id="best-movies" style={styles.sectionTitle}>Best Movies</h2>
      <div style={styles.movieGrid}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        ) : (
          <h2>No movies found</h2>
        )}
      </div>

      {/* New Movies Section */}
      <h2 id="new-movies" style={styles.sectionTitle}>New Movies</h2>
      <div style={styles.movieGrid}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        ) : (
          <h2>No movies found</h2>
        )}
      </div>

      {/* Follow Us Section */}
      <h2 id="follow-us" style={styles.sectionTitle}>Follow Us on Social Media</h2>
      <div style={styles.socialMedia}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>Instagram</a>
      </div>
    </div>
  );
}

// Basic styling for Dark Mode and Layout
const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#1b1b1b',
    color: '#fff',
    minHeight: '100vh',
    padding: '20px',
  },
  movieGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  sectionTitle: {
    marginTop: '40px',
    fontSize: '2rem',
  },
  socialMedia: {
    marginTop: '20px',
  },
  socialLink: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
    fontSize: '16px',
  },
};

export default App;
