require('dotenv').config()
const express = require('express')
const port = process.env.PORT

// express app
const app = express();

// Middleware global
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

app.get('/', (req, res) => {
    res.json(
        {
            Mensaje: "Hola desde docker con express."
        }
    )
})

// Port
app.listen(port, () => {
    console.log("Puerto-->", port);
})