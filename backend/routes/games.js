/*
* Express router 
*/

const express = require('express');
const Game = require('../models/gameModel')
const router = express.Router();

// GET all retro games
router.get('/', (req, res) => {
    res.json({
        mensaje: 'Get all games'
    })
});

// GET a single game
router.get('/:id', (req, res) => {
    res.json({
        mensaje: `Game number: ${req.params.id}`
    })
});

// POST a new game
// add Async
router.post('/', async (req, res) => {

    const { title, publisher, plataform } = req.body

    try {
        const newGame = await Game.create({
            title,
            publisher,
            plataform
        })
        res.status(200).json(newGame)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

});

// DELETE a new game
router.delete('/:id', (req, res) => {
    res.json({
        mensaje: `Delete a game with id: ${req.params.id}`
    })
});

// UPDATE a game
router.patch('/:id', (req, res) => {
    res.json({
        mensaje: `Update a game with id: ${req.params.id}`
    })
});


module.exports = router