import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import axios from 'api/axios';
import endpoint, { IMAGE_ENDPOINT } from 'api/endpoint';

import './index.css';

const Hero = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(endpoint[0].url).then((response) => {
      const movies = response.data.results;
      const random = Math.floor(Math.random() * 20);
      setMovie(movies[random]);
      console.info(movies);
    });
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${IMAGE_ENDPOINT}${movie.backdrop_path})`,
      }}
    >
      <div className="hero__content">
        <h1 className="hero__title">{movie.original_name}</h1>
        <p className="hero__description">{movie.overview}</p>
        <div className="hero__action">
          <Button className="hero__button">
            <PlayArrowIcon /> Play
          </Button>
          <Button className="hero__button">
            <FormatListBulletedIcon />
            My List
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
