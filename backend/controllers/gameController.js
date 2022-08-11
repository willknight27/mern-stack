const mongoose = require('mongoose')
const Game = require('../models/gameModel')

// Get all games
const getAllGames = async (req, res) => {

    // find({}) => object blank = get all
    // {createdAt: -1}: order asc
    const games = await Game.find({}).sort({ createdAt: -1 })

    res.status(200).json(games)
}

// Get a single game
const getGame = async (req, res) => {

    const { id } = req.params

    // check the id format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Invalid id', error: `No game with id: ${id}` })
    }
    // Find a game by id
    const game = await Game.findById(id)
    if (!game) {
        return res.status(404).json({ error: `No game with id: ${id}` })
    }
    return res.status(200).json(game)
}

// Create
const createGame = async (req, res) => {
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
}

// Update
const updateGame = async (req, res) => {
    // Get the ID
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Invalid id', error: `No game with id: ${id}` })
    }

    const game = await Game.findByIdAndUpdate({_id:id},{
        ...req.body // Spread operator = game object
    })

    // Check the game
    if (!game) {
        return res.status(400).json({ error: `No game with id: ${id}` })
    }

    res.status(200).json(game)
}


// Delete
const deleteGame = async (req, res) => {
    // Get the ID
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Invalid id', error: `No game with id: ${id}` })
    }

    // mongo db id = _id
    const game = await Game.findByIdAndDelete({ _id: id });

    if (!game) {
        return res.status(400).json({ error: `No game with id: ${id}` })
    }

    res.status(200).json(game)



}

module.exports = {
    getAllGames,
    getGame,
    createGame,
    updateGame,
    deleteGame,
}