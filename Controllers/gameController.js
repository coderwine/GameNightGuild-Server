const router = require('express').Router();
const Game = require('../db').import('../Models/game');
const validateSession = require('../Middleware/validate-session');

//! POST  C

router.post('/', validateSession, (req, res) => {
    const gameFromRequest = {
        title: req.body.game.title,
        playerCount: req.body.game.playerCount,
        winGame: req.body.game.winGame,
        score: req.body.game.score,
        datePlayed: req.body.game.datePlayed,
        rating: req.body.game.rating,
        comments: req.body.game.comments,
    }

    Game.create(gameFromRequest)
        .then(game => res.statusMessage(200).json(game))
        .then(console.log('test info logged'))
        .catch(err => res.json(req.errors))
})

//! GET   R

router.get('/', (req,res) => {
    Game.findAll()
        .then(game => res.status(200).json(game))
        .catch(err => res.status(500).json({ error: err }))
})

//? by ID

router.get('/:id', (req, res) => {
    Game.findOne({
        where: { id: req.params.id }})
        .then(game => res.status(200).json(game))
        .catch(err => res.json(req.errors))
})

//! PUT  U

router.put('/:id', (req, res) => {
    Game.update(req.body, {
        where: { id: req.params.id }})
        .then(game => res.status(200).json(game))
        .catch(err => res.json(req.errors))
})

//! DELETE  D

router.delete('/:id', (req, res) => {
    Game.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(game => res.sendStatus(200).json(game))
    // .then(console.log(`${game} has been removed.`))
    .catch(err => res.json({ error: err }))
})

module.exports = router;