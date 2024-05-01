import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./movie-card.scss";
import React from "react";
export const MovieCard = ({ movie, isFavorite, token, user, setUser }) => {
  console.log(user.FavoriteMovies.includes(movie._id));
  console.log(user);
  const addToFavorites = () => {
    fetch(
      `https://movieapicf-30767e813dee.herokuapp.com/users/${
        user.username
      }/movies/${encodeURIComponent(movie._id)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to add movie to favorites.");
        }
        alert("Movie added to favorites successfully!");
        const storedUser = JSON.parse(localStorage.getItem("user"));

        // Update FavoriteMovies array
        storedUser.FavoriteMovies.push(movie._id);

        // Save updated user object back to localStorage
        localStorage.setItem("user", JSON.stringify(storedUser));
        setUser((prevUser) => ({
          ...prevUser,
          FavoriteMovies: [...prevUser.FavoriteMovies, movie._id],
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Link
        to={`/movies/${encodeURIComponent(movie.MovieID)}`}
        className="movie-view"
      >
        <Card className="h-100">
          <Card.Img
            variant="top"
            src={movie.image}
            className="object-fit-cover"
          />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.genre}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <Card>
        {isFavorite ? (
          <Button
            variant="primary"
            onClick={() => setDelMovieID(movie.MovieID)}
          >
            Remove
          </Button>
        ) : (
          <Button variant="primary" onClick={() => addToFavorites()}>
            Add
          </Button>
        )}
      </Card>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    MovieID: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    genre: PropTypes.string,
    director: PropTypes.string,
    featured: PropTypes.bool,
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
};