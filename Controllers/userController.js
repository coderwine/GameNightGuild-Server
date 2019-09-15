const router =  require('express').Router();
const User = require('../db').import('../Models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

                                        //! SIGN UP

router.post('/signup', (req, res) => {
    User.create({
        fullName: req.body.user.fullName,
        userName: req.body.user.userName,
        email: req.body.user.email,
        passwordHash: bcrypt.hashSync(req.body.user.passwordHash, 10)
    }).then(
        createSuccess = (user) => {
            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60*60*24 })
            res.json({
                user: user,
                message: 'Welcome to the Guild Hall',
                sessionToken: token
            })
        },
        createError = err => res.send(500, err.message)
        // function createError(err){ res.send(500, err.message);}
    )
})

                                        //! LOGIN

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(user){
        bcrypt.compare(req.body.passwordHash, user.passwordHash, (err, matches) => {
            if(matches){
                let token = jwt.sign({ id: user.id}, process.env.JWT_SECRET, { expiresIn: 60*60*24 })
                res.json({
                    user: user,
                    message: 'Welcome Fellow Guild Member!',
                    sessionToken: token
                })
            } else {
                res.status(502).send({error: 'The Gateway was Bad...'})
            }
        })
    } else {
        res.status(500).send({error: 'Your Membership Authentication did not meet our list.'})
    }
    }, err => res.status(501).send({error: 'Failed to process'}))
})

module.exports = router;