import React from 'react';
import './index.css';

import { IMAGE_ENDPOINT } from 'api/endpoint';

function MovieItem({ src, className, onClick }) {
  return (
    <img
      className={`movieitem ${className}`}
      src={`${IMAGE_ENDPOINT}${src}`}
      alt="demo"
      onClick={onClick}
    />
  );
}

export default MovieItem;
