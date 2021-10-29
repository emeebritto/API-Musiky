const router = require('express').Router()

const randomPlaylists = require('./randomPlaylist.js')
const randomSongs = require('./randomSongs.js')


router.options('/', (req, res) => {
    res.set('Access-Control-Allow-Methods', 'GET')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.status(200)
    res.end()
})


router.get('/playlists', async (req, res) => {

    const resultSongs = await randomPlaylists(req.query)

    res.json(resultSongs)
})


router.get('/songs', async (req, res) => {

    const resultSongs = await randomSongs(req.query)

    res.json(resultSongs)
})

module.exports = router