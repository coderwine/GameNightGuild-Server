require('dotenv').config();

const express = require('express');
const app = express();
const user = require('./Controllers/userController');
const game = require('./Controllers/gameController');
// const session = require('./Controllers/sessionController'); //! Stretch Goal
// const guild = require('./Controllers/guildController'); //! Stretch Goal
const sequelize = require('./db');

sequelize.sync();
app.use(express.json());

app.use(require('./Middleware/headers'));

app.use('/user', user);
app.use('/games', game);
// app.use('/session', session);  //! Stretch Goal
// app.use('/guilds', guild);  //! Stretch Goal

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}.`))