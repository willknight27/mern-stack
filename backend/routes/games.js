/*
* Express router 
*/

const express = require('express');
const { getAllGames, createGame, getGame } = require('../controllers/gameController');
const router = express.Router();

// GET all retro games
router.get('/', getAllGames );

// GET a single game
router.get('/:id', getGame );

// POST a new game
// add Async
router.post('/', createGame );

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