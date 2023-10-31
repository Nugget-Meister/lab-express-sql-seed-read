const express = require('express');
const {
    getAllSongs,
    getOneSong,
    createSong,
    updateSong,
    deleteSong
} = require("../queries/songs.js")

// Query import go here

const songs = express.Router()


songs.get("/", async (req, res) => {
    const songs = await getAllSongs();
    if (songs[0]) {
        res.status(200)
        .json({success: true, data: {payload: songs}})
    } else {
        res.status(500)
        .json({ success: false, data: { error: "An error has occurred pelase try again" } });
    }

})

songs.get("/:id", async (req, res) => {
    const {id} = req.params;
})

songs.post("/", async (req, res) => {

})

songs.put("/:id", async (req, res) => {
    const {id} = req.params;

})

songs.delete(":/id", async (req, res) => {
    const {id} = req.params;

})

module.exports = songs