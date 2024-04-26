import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./movie-card.scss";

export const MovieCard = ({ movie, isFavorite }) => {
  const storedToken = localStorage.getItem("token");
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);

  useEffect(() => {
    const addToFavorites = () => {
      if (!storedUser || !movie.MovieID) {
        return;
      }
      fetch(
        `https://movieapicf-30767e813dee.herokuapp.com/users/${storedUser.username}/movies/${encodeURIComponent(movie.MovieID)}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to add movie to favorites.");
          }
          alert("Movie added to favorites successfully!");
          setUser((prevUser) => ({
            ...prevUser,
            favorites: [...prevUser.favorites, movie.MovieID],
          }));
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const removeFromFavorites = () => {
      if (!storedUser || !movie.MovieID) {
        return;
      }
      fetch(
        `https://movieapicf-30767e813dee.herokuapp.com/users/${storedUser.username}/movies/${encodeURIComponent(movie.MovieID)}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to remove movie from favorites.");
          }
          alert("Movie removed from favorites successfully!");
          setUser((prevUser) => ({
            ...prevUser,
            favorites: prevUser.favorites.filter(
              (favMovieID) => favMovieID !== movie.MovieID
            ),
          }));
        })
        .catch((error) => {
          console.error(error);
        });
    };

    if (addMovieID) {
      addToFavorites();
    }
    if (delMovieID) {
      removeFromFavorites();
    }
  }, [addMovieID, delMovieID, token, storedUser, movie.MovieID]);

  return (
    <>
      <Link to={`/movies/${encodeURIComponent(movie.MovieID)}`} className="movie-view">
        <Card className="h-100">
          <Card.Img variant="top" src={movie.image} className="object-fit-cover" />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.genre}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <Card>
        {isFavorite ? (
          <Button variant="primary" onClick={() => setDelMovieID(movie.MovieID)}>
            Remove
          </Button>
        ) : (
          <Button variant="primary" onClick={() => setAddMovieID(movie.MovieID)}>
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
