require('dotenv').config()
const express = require('express')
const gameRoutes = require('./routes/games')
const port = process.env.PORT

// express app
const app = express();

// Middleware: access to the body of the request
app.use(express.json())

// Middleware global
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

// Primary route
app.use('/api/games',gameRoutes)

// Port
app.listen(port, () => {
    console.log("Port-->", port);
})