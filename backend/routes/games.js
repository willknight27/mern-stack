/*
* Express router 
*/

const express = require('express');
const router = express.Router();

// GET all retro games
router.get('/', (req, res)=>{
    res.json({
        mensaje: 'Get all games'
    })
});

// GET a single game
router.get('/:id', (req, res)=>{
    res.json({
        mensaje: `Game number: ${req.params.id}`
    })
});

// POST a new game
router.post('/', (req, res)=>{
    res.json({
        mensaje: 'Post a new game'
    })
});

// DELETE a new game
router.delete('/:id', (req, res)=>{
    res.json({
        mensaje: `Delete a game with id: ${req.params.id}`
    })
});

// UPDATE a game
router.patch('/:id', (req, res)=>{
    res.json({
        mensaje: `Update a game with id: ${req.params.id}`
    })
});


module.exports = router