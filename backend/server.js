const express = require('express')
const port = 4000

// express app
const app = express()

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