import React, { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
export const MovieView = ({ movie, onBackClick, token }) => {
  const [selectedMovie, setMovie] = useState([]);
  let url =
    `https://movieapicf-30767e813dee.herokuapp.com/movies` + movie.url;
  useEffect(() => {
    if (!token) {
      return;
    }
    fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        const actorNames = data.actors.map((actors) => {
          return actors.name;
        });
        const dataFromMovie = {
          id: data._id,
          title: data.title,
          description: data.description,
          director: data.director.name,
          actors: actorNames,
          genre: data.genre.name,
        };
        setMovie(dataFromMovie);
      });
  }, []);
  return (
    <div className="one-movie--main">
       <Row className="justify-content-center">
         <Col md={8}>
           <Row className="justify-content-center one-movie--view " flex="1">
             <Col className="movie-view--image_container" md={6}>
               <div>
                 <img
                   className="movie-view--image"
                   src={movie.image}
                   alt={movie.title}
                 />
               </div>
             </Col>
             <Col className="movie-view--text_container" md={6}>
               <div className="movie-view-text--heading">
                 <h1>{selectedMovie.title}</h1>
                 <hr />
              </div>
              <div className="movie-view-text--description">
                <span>{selectedMovie.description}</span>
              </div>
              <div className="movie-view-text--genre">
                <h2 className="movie-view-text--genre_heading">Genre</h2>
                <span>{selectedMovie.genre}</span>
              </div>
              <div className="movie-view-text--director">
                <h2>Director</h2>
                <span>{selectedMovie.director}</span>
              </div>
              <div className="movie-view-text--actors">
                <h2>Actors</h2>
                <span>
                  {selectedMovie.actors
                    ? selectedMovie.actors.map((name) => (
                        <div key={name}>{name}</div>
                      ))
                    : null}
                </span>
              </div>
              <br />
              <Button variant="outline-primary" onClick={onBackClick}>
                Back to Menu
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
MovieView.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string,
  }),
  onBackClick: PropTypes.func.isRequired,
};