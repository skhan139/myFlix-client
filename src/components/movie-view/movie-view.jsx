import React, { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export const MovieView = ({ movie, onBackClick, token }) => {
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
                  alt={movie.Title}
                />
              </div>
            </Col>
            <Col className="movie-view--text_container" md={6}>
              <div className="movie-view-text--heading">
                <h1>{movie.Title}</h1>
                <hr />
              </div>
              <div className="movie-view-text--description">
                <span>{movie.Description}</span>
              </div>
              <div className="movie-view-text--genre">
                <h2 className="movie-view-text--genre_heading">Genre</h2>
                <span>{movie.Genre.Name}</span>
              </div>
              <div className="movie-view-text--director">
                <h2>Director</h2>
                <span>{movie.Director.Name}</span>
              </div>
              {/* <div className="movie-view-text--actors">
                <h2>Actors</h2>
                <span>
                  {selectedMovie.actors
                    ? selectedMovie.actors.map((name) => (
                        <div key={name}>{name}</div>
                      ))
                    : null}
                </span>
              </div>
              <br /> */}
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