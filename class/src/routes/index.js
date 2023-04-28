const express = require('express');
const axios = require('axios');
const router = express.Router()
const { isLoggedIn, isNotLoggedIn, isNotSignedUp } = require('../lib/auth');

router.get('/', async (req, res) => {
    res.render('auth/signin.hbs')
})

router.get('/characters', isLoggedIn, async (req, res) => {

    const END_POINT = "https://rickandmortyapi.com/api/character"

    axios.get(END_POINT)
        .then(function (response) {
            console.log(response.data.results)
            res.render('characters.hbs', {
                data: response.data.results,
            })
        })
        .catch(function (error) {
            console.log(error);
            res.render('characters.hbs', {
                error,
                data: [],
            })
        });
})

router.get('/locations', isLoggedIn, async (req, res) => {
    const a = "Hello World"

    const END_POINT = "https://rickandmortyapi.com/api/location"

    axios.get(END_POINT)
        .then(function (response) {
            console.log(response.data.results)
            res.render('location.hbs', {
                data: response.data.results,
            })
        })
        .catch(function (error) {
            console.log(error);
            res.render('location.hbs', {
                error,
                data: [],
            })
        });
})

router.get('/episodes', isLoggedIn, async (req, res) => {
    const a = "Hello World"

    const END_POINT = "https://rickandmortyapi.com/api/episode"

    axios.get(END_POINT)
        .then(function (response) {
            console.log(response.data.results)
            res.render('episode.hbs', {
                data: response.data.results,
            })
        })
        .catch(function (error) {
            console.log(error);
            res.render('episode.hbs', {
                error,
                data: [],
            })
        });
});


module.exports = router
