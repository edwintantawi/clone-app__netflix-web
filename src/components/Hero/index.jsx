import React from 'react';
import { Button } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

import './index.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Hero</h1>
        <p className="hero__description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
          nisi ex. Esse enim illo earum eaque.
        </p>
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
