export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div>
        <div>
          <img src={movie.image} style={{ width: '175px', height: 'auto' }} alt="Movie Poster" />
        </div>
        <div>
          <span style={{fontWeight: 'bold' }}>Title: </span>
          <span style={{fontWeight: 'bold' }}>{movie.title}</span>
        </div>
        <div>
          <span style={{fontWeight: 'bold' }}>Description: </span>
          <span style={{fontWeight: 'bold' }}>{movie.description}</span>
        </div>
        <div>
          <span style={{fontWeight: 'bold' }}>Genre: </span>
          <span style={{fontWeight: 'bold' }}>{movie.genre}</span>
        </div>
        <div>
          <span style={{fontWeight: 'bold' }}>Director: </span>
          <span style={{fontWeight: 'bold' }}>{movie.director}</span>
        </div>
        <div>
          <span style={{fontWeight: 'bold' }}>Featured: </span>
          <span style={{fontWeight: 'bold' }}>{movie.featured ? "True" : "False"}</span>
        </div>
        <button onClick={onBackClick}>Back</button>{" "}
      </div>
    );
  };