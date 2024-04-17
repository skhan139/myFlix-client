import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import  Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import "./movie-card.scss";

export const MovieCard = ({ movie, isFavorite }) => {
  const storedToken = localStorage.getItem("token");
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser? storedUser: null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  
  const [addMovieID, setAddMovieID] = useState("");
  const [delMovieID, setDelMovieID] = useState("");

  useEffect(() => {
    const addToFavorites = () => {
      fetch(
        `https://movieapicf-30767e813dee.herokuapp.com/users/${user.username}/movies/${encodeURIComponent(movie.MovieID)}`,
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
          window.location.reload();
          return response.json();
        })
        .then((user) => {
          if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            setUser(user);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
    const removeFromFavorites = () => {
      fetch(
        `https://movieapicf-30767e813dee.herokuapp.com/${user.username}/movies/${encodeURIComponent(movie.MovieID)}`,
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
          window.location.reload();
          return response.json();
        })
        .then((user) => {
          if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            setUser(user);
          }
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
  }, [addMovieID, delMovieID, token]);

  const handleAddToFavorites = () => {
    setAddMovieID(movie.MovieID);
  };
  const handleRemoveFromFavorites = () => {
    setDelMovieID(movie.MovieID);
  }; 

  return (
    <>
    <Link to={`/movies/${encodeURIComponent(movie.id)}`} className="movie-view">
    <Card className="h-100" >
      <Card.Img variant="top" src={movie.image} className="object-fit-cover" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.genre}</Card.Text>       
      </Card.Body>
    </Card>
    </Link>
    <Card>
      {isFavorite ? ( 
      <Button variant="primary"  onClick={handleRemoveFromFavorites}>Remove</Button>
    ) : (
      <Button variant="primary" onClick={handleAddToFavorites}>Add</Button>  
    )}
    </Card>
  </>
  );
  };

  MovieCard.propTypes = {
    movie: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string,
      genre: PropTypes.string,
      director: PropTypes.string,
      featured: PropTypes.bool
    }).isRequired,
  };
  
 