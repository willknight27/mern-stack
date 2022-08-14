require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const gameRoutes = require('./routes/games')
const port = process.env.PORT

// express app
const app = express();

// Middleware: access to the body of the request
app.use(cors())
app.use(express.json())

// Middleware global
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// Primary route
app.use('/api/games', gameRoutes)

// Connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to database')
        // If connection is ok, then listen request
        // Port
        app.listen(port, () => {
            console.log("Port-->", port);
        });
    })
    .catch(error => {
        console.log(error);
    })

