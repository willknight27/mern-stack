const mongoose = require('mongoose')
const Schema = mongoose.Schema


/*
* Schema:
    - First argument: Schema -> structure of the document
    - Second argument: timestamps -> new document
*/
const gameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    plataform: {
        type: String,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model('Game', gameSchema)

