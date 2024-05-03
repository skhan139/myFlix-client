import { useParams } from "react-router";
 import { Link } from "react-router-dom";
 import PropTypes from "prop-types";
 import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


 export const MovieView = ({ movies, onBackClick }) => {
   const { movieId } = useParams();

   const handleBackClick = () => {
    
    history.push("/");
  };

   const movie = movies.find((m) => m.id === movieId);
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
              <Link to={`/`}>
              <button className="back-button" onClick={onBackClick}>
                   Back
              </button>
              </Link>
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