import Hero from 'components/Hero';
import MovieList from 'components/MovieList';
import React from 'react';
import endpoint from 'api/endpoint';

import './index.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      {endpoint.map((movieList) => (
        <MovieList
          key={movieList.id}
          title={movieList.title}
          endpoint={movieList.url}
          isLarge={movieList.id === 1 ? true : false}
        />
      ))}
    </div>
  );
};

export default Home;
