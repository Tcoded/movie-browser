const express = require('express');
const fetch = require('node-fetch');
const config = require('../config.json');
const router = express.Router();

const apiKey = config.apiKey;

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const uri = new URL(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`);
    fetch(uri)
        .then(response => response.json())
        .then(data => res.json(data));
});

router.get('/:id/images', (req, res) => {
    const { id } = req.params;
    const uri = new URL(`https://api.themoviedb.org/3/person/${id}/images?api_key=${apiKey}`);
    fetch(uri)
        .then(response => response.json())
        .then(data => res.json(data));
});

router.get('/:id/movie_credits', (req, res) => {
    const { id } = req.params;
    const uri = new URL(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}`);
    fetch(uri)
        .then(response => response.json())
        .then(data => res.json(data));
});

module.exports = router;