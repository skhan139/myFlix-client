import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card
      className="movie-card h-100"
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      <Card.Img variant="top" src={movie.image} alt={movie.Title} />
      <Card.Body>
        <Card.Title className="movie-title">
          <span className="titleText">{movie.Title}</span>
        </Card.Title>
        <Card.Text>{movie.Description.slice(0, 50)}...</Card.Text>
      </Card.Body>
      <Button variant="primary" className="movie-card--button">
        View
      </Button>
    </Card>
  );
 };
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};