import React, { useState, useEffect } from 'react';
import MovieGrid from '../MovieGrid/MovieGrid';

import './HomePage.css';

const HomePage = () => {
    const [moviesLoaded, setMoviesLoaded] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchResponse = () => {
        const query = encodeURI(searchQuery);
        if (query) {
            fetch(`/search/movie?query=${query}`)
                .then(response => response.json())
                .then(data => setMoviesLoaded(data.results));
        } else {
            showPopularMovies();
        }
    };

    const showPopularMovies = () => {
        fetch('/movie/popular')
            .then(response => response.json())
            .then(data => setMoviesLoaded(data.results));
    };

    useEffect(() => {
        fetchResponse();
    // eslint-disable-next-line
    }, [searchQuery]);

    return (
        <div className="App">
            <input
                aria-label="Search Movies by Title"
                placeholder=">Search Movies by Title"
                type="text"
                value={searchQuery}
                className="searchbar"
                onChange={(e) => {setSearchQuery(e.target.value)}}
            />
            <MovieGrid movies={moviesLoaded}/>
        </div>
    );
};

export default HomePage;