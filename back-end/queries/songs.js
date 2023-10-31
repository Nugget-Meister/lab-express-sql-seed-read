const db = require("../db/dbConfig.js")


const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs") 
        return allSongs
    }
    catch (err) {
        return err
    }
}
const getOneSong = async (id) => {
    try {
        const song = await db.one(`SELECT * FROM songs WHERE id=$1`, id)
        return song
    }
    catch (err) {
        return err
    }
}

const createSong = async (song) => {
    try {
        const newSong = await db.one(`INSERT INTO songs (name, url, category, description, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *`, [song.name, song.url, song.category, song.description, song.is_favorite])
    }
    catch (err) {}

}

const deleteSong = async (id) => {
    try {
        const deletedSong = await db.one("DELETE FROM songs WHERE id = $1 RETURNING *", id)
        return deletedSong
    }
    catch (err) {}
}
const updateSong = async (id, song) => {
    try {
        const {name, url, category, description, is_favorite} = song;
        const updatedSong = await db.one(
            "UPDATE songs SET name=$1, url=$2, category=$3 description=$4 is_favorite=$5 WHERE id=$5 RETURNING *",
            [name, url, category, description, is_favorite, id]
            )
            return updatedSong
    }
    catch (err) {
        return err
    }
}




module.exports = {
    getAllSongs,
    getOneSong,
    createSong,
    deleteSong,
    updateSong
}