const express = require('express');
const fetch = require('node-fetch');
const config = require('../config.json');
const router = express.Router();

router.get('/movie', (req, res) => {
    const apiKey = config.apiKey;
    const query = req.query.query;
    const uri = new URL(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`);

    fetch(uri)
        .then(response => response.json())
        .then(data => res.json(data));
});

module.exports = router;