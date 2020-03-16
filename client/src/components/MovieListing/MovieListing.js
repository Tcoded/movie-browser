import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';

import './MovieListing.css';

const MovieListing = props => {
    const [state, setState] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {casting: [], crew: [], data: []}
    );

    useEffect(() => {
        const { id } = props.match.params;
        fetch(`/movie/${id}`)
            .then(response => response.json())
            .then(data => setState({ data: data }));
        fetch(`/movie/${id}/credits`)
            .then(response => response.json())
            .then(data => setState({ casting: data.cast, crew: data.crew }));
    // eslint-disable-next-line
    }, []);

    const {
        original_title,
        overview,
        poster_path,
        release_date,
        vote_average
    } = state.data;

    let posterElem;

    if (poster_path) {
        posterElem = (
            <div className="poster">
                <img src={"http://image.tmdb.org/t/p/w500" + (poster_path)} alt={original_title} />
            </div>
        );
    } else {
        posterElem = null;
    }

    return (
        <div className="movie-container">
            {posterElem}
            <div className="details">
                <h1>{original_title}</h1>
                <p>{overview}</p>
                <p>Rating: {vote_average}/10</p>
                <h3>Casting</h3>
                <ul className="cast">
                    {state.casting.map(member => (
                        <li key={member.id}>
                            <Link to={location => `/person/${member.id}`}><b>{member.name}</b></Link> {member.character}
                        </li>
                    ))}
                </ul>
                <p><i>Release Date: {release_date}</i></p>
            </div>
        </div>
    );
};

export default MovieListing;