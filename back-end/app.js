const express = require('express');
const cors = require('cors');
const app = express()

const songController = require('./controllers/songController.js')



app.use(cors())
app.use(express.json())

app.use("/songs", songController)


app.get("/", (req, res) => {
    console.log("[GET] Received for base link")
    res.status(200).json({message:"Welcome to Tuner"})
})


app.get("*", (req, res) => {
    res.status(404).json({status: "BAD" , data:{error : "bing bong"}})
    res.redirect("/")
})

module.exports = app
