import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';

import './PersonListing.css';

const PersonListing = props => {
    const [state, setState] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {images: [], movie_credits: [], data: []}
    );

    useEffect(() => {
        const { id } = props.match.params;
        fetch(`/person/${id}`)
            .then(response => response.json())
            .then(data => setState({ data: data }));
        fetch(`/person/${id}/images`)
            .then(response => response.json())
            .then(data => setState({ images: data.profiles }));
        fetch(`/person/${id}/movie_credits`)
            .then(response => response.json())
            .then(data => setState({ movie_credits: data.cast }));
    // eslint-disable-next-line
    }, []);

    const { images, movie_credits } = state;
    const { name, biography } = state.data;

    return (
        <div className="person-container">
            {images.length > 0 &&
                <div className="headshot">
                    <img src={"http://image.tmdb.org/t/p/w500" + (images[0].file_path)} alt={name} />
                </div>
            }
            <div className="details">
                <h1>{name}</h1>
                <p>{biography}</p>
                <h3>Movies</h3>
                <ul className="movies">
                    {movie_credits.map(movie => (
                        <li key={movie.id}>
                            <Link to={location => `/movie/${movie.id}`}><b>{movie.original_title}</b></Link> {movie.character}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PersonListing;