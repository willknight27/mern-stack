/*
* Express router 
*/
const express = require('express');
const { getAllGames, createGame, getGame, updateGame, deleteGame } = require('../controllers/gameController');
const router = express.Router();

// GET all retro games
router.get('/', getAllGames );

// GET a single game
router.get('/:id', getGame );

// POST a new game
// add Async
router.post('/', createGame );

// UPDATE a game
router.patch('/:id', updateGame);

// DELETE a new game
router.delete('/:id', deleteGame);


module.exports = router