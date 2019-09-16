module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define('game', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        playerCount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        winGame: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        datePlayed: {
            type: DataTypes.DATEONLY,  
            allowNull: false
        },
        // rating: {
        //     type: DataTypes.RANGE(DataTypes.INTEGER),
        //     allowNull: true
        // },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return Game;
}

// will need to pass a Date contructor later.