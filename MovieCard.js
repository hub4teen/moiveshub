import React from 'react';

// MovieCard Component to display individual movie details
const MovieCard = ({ movie }) => {
  return (
    <div style={styles.card}>
      <img src={movie.poster} alt={movie.title} style={styles.poster} />
      <h3 style={styles.title}>{movie.title}</h3>
    </div>
  );
};

// Styles for the MovieCard
const styles = {
  card: {
    padding: '10px',
    border: '1px solid #444',
    borderRadius: '10px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    transition: 'transform 0.3s', // Add transition effect
  },
  poster: {
    width: '100%',
    height: '150px', // Smaller height for the poster
    objectFit: 'cover',
    borderRadius: '10px',
  },
  title: {
    margin: '10px 0 0', // Space between the image and title
    fontSize: '1rem', // Smaller font size
  },
};

export default MovieCard;
