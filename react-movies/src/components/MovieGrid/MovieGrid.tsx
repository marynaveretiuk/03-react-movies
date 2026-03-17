import type { Movie } from '../../types/movie';

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const fallbackPoster = 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <div onClick={() => onSelect(movie)}>
            <img
              src={
                movie.poster_path
                  ? `${posterBaseUrl}${movie.poster_path}`
                  : fallbackPoster
              }
              alt={movie.title}
              loading="lazy"
            />
            <h2>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}