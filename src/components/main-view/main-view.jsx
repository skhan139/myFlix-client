import { useState } from "react";
 import { MovieCard } from "../movie-card/movie-card";
 import { MovieView } from "../movie-view/movie-view";

 export const MainView = () => {
   const [movies, setMovies] = useState([
     {
       id: 1,
       title: "Silence Of The Lambs",
       image:
         "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15829_v_v13_aa.jpg",
       description:
       "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
       genre: "Thriller",
       director: "Jonathan Demme",
       featured: true,
     },
     {
       id: 2,
       title: "American Psycho",
       image:
         "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
       description:
       "American Psycho offers a chilling exploration of 1980s Wall Street excess through the lens of Patrick Bateman, a wealthy investment banker whose veneer of success masks a descent into psychosis and violence.",
       genre: "Crime",
       director: "Mary Harron",
       featured: true,
     },
     {
       id: 3,
       title: "Fight Club",
       image:
         "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
       description:
         "Fight Club explores the disillusionment of modern society through the eyes of an insomniac office worker who forms an underground fight club with a charismatic soap salesman, leading to a spiral of chaos and self-discovery.",
       genre: "Drama",
       director: "David Fincher",
       featured: true,
     },
     {
       id: 4,
       title: "American Assassin",
       image:
         "https://m.media-amazon.com/images/M/MV5BMzcxNjZjMzEtNjZmZC00OTY4LWI1YmYtNGI0MzRlMGFjZTAzXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
       description:
         "A CIA recruit seeks revenge after his fiancée is killed in a terrorist attack, embarking on a mission of vengeance and redemption under the tutelage of a hardened Cold War veteran.",
       genre: "Action",
       director: "Michael Cuesta",
       featured: true,
     },
     {
       id: 5,
       title: "The Dark Knight Rises",
       image:
         "https://m.media-amazon.com/images/I/81AGqBcpYOL._AC_UF894,1000_QL80_.jpg",
       description:
         "The epic conclusion to Christopher Nolan's Batman trilogy, featuring Batman's battle against Bane and a city on the brink.",
       genre: "Action",
       director: "Christopher Nolan",
       featured: true,
     },
   ]);

   const [selectedMovie, setSelectedMovie] = useState(null);
   if (selectedMovie) {
     return (
       <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
     );
   }

   if (movies.length === 0) {
     return <div>The list is empty!</div>;
   }

   return (
     <div>
       {movies.map((movie) => (
         <MovieCard
           key={movie.id}
           movie={movie}
           onMovieClick={(newSelectedMovie) => {
             setSelectedMovie(newSelectedMovie);
           }}
         />
       ))}
     </div>
   );
 };