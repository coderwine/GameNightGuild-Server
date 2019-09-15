//! STRETCH GOAL
module.exports = (sequelize, DataTypes) => {
    const GameSession = sequelize.define('gameSession', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        playerCount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        win: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        date: {
            type: DataTypes.INTERGER,  
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return GameSession;
}

// will need to pass a Date contructor later.