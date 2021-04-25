import MovieItem from 'components/MovieItem';
import React, { useEffect, useState } from 'react';
import axios from 'api/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import CloseIcon from '@material-ui/icons/Close';
import './index.css';

const MovieList = ({ title, endpoint, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerId, setTrailerId] = useState('');
  const [noTrailer, setNoTrailer] = useState(false);

  useEffect(() => {
    axios.get(endpoint).then((response) => {
      setMovies(response.data.results);
    });
  }, [endpoint]);

  const options = {
    playerVars: {
      autoplay: 1,
    },
  };

  const handleTrailer = (movie) => {
    console.info(movie);
    if (trailerId) {
      setTrailerId('');
    } else {
      movieTrailer(checkMovieName(movie))
        .then((url) => {
          if (url) {
            const urlId = new URLSearchParams(new URL(url).search);
            setTrailerId(urlId.get('v'));
            setNoTrailer(false);
          } else {
            setNoTrailer(true);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const checkMovieName = (movie) => {
    if (movie?.name) {
      return movie.name;
    }
    if (movie?.title) {
      return movie.title;
    }
    if (movie?.original_title) {
      return movie.original_title;
    }
    if (movie?.original_name) {
      return movie.original_name;
    }
  };

  const handleCloseTrailer = () => {
    setNoTrailer('');
    setTrailerId('');
  };
  return (
    <section className="movielist">
      <h2 className="movielist__title">{title}</h2>
      <div className="movielist__body">
        {movies.map((movie) => {
          if (isLarge) {
            return (
              <MovieItem
                key={movie.id}
                src={movie.poster_path}
                className="movieitem--large"
                onClick={() => handleTrailer(movie)}
              />
            );
          }
          if (
            movie.backdrop_path !== null &&
            movie.backdrop_path !== undefined
          ) {
            return (
              <MovieItem
                key={movie.id}
                src={movie.backdrop_path}
                onClick={() => handleTrailer(movie)}
              />
            );
          }

          return null;
        })}
      </div>

      {trailerId && (
        <div className="movielist__trailerArea">
          <div className="movielist__toast">
            <h3>Movie Trailer</h3>
            <CloseIcon
              className="movielist__close"
              onClick={handleCloseTrailer}
            />
          </div>
          <YouTube
            videoId={trailerId}
            opts={options}
            className="movielist__trailer"
          />
        </div>
      )}
      {noTrailer && (
        <div className="movielist__toast movielist__toast--red">
          <h3>Trailer Not Found</h3>
          <CloseIcon
            className="movielist__close"
            onClick={handleCloseTrailer}
          />
        </div>
      )}
    </section>
  );
};

export default MovieList;
