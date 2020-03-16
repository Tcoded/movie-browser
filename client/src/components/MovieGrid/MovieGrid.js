import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

import './MovieGrid.css';

function MovieGrid(props) {
    return (
        <div className='movie-grid'>
            {props.movies.map(movie => {
                const posterPath = "http://image.tmdb.org/t/p/w500" + (movie.poster_path);
                return (
                    <MovieCard 
                        id={movie.id}
                        key={movie.id}
                        title={movie.original_title}
                        posterPath={posterPath}
                    />
                );
            })}
        </div>
    );
};

export default MovieGrid;