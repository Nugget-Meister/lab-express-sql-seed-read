const express = require('express');

// Query import go here

const songs = express.Router()


songs.get("/", (req, res) => {

})

songs.get("/:id", (req, res) => {
    const {id} = req.params;
})

songs.post("/", (req, res) => {

})

songs.put("/:id", (req, res) => {
    const {id} = req.params;

})

songs.delete(":/id", (req, res) => {
    const {id} = req.params;

})