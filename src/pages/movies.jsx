
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=fbe3e6e0efe2a935006e0242bb340a7a`)
      .then(res => setMovies(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-4">Popular Movies</h2>
      <div className="row">
        {movies.map(movie => (
          <div key={movie.id} className="col-md-3 mb-4">
            <Link to={`/movies/${movie.id}`} className="text-decoration-none text-dark">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="img-fluid rounded"
                alt={movie.title}
              />
              <h5 className="mt-2">{movie.title}</h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
