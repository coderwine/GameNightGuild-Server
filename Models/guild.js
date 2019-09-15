//! STRETCH GOAL
module.exports = (sequelize, DataTypes) => {
    const Guild = sequelize.define('guild', {
        guildName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        leader: {
            type: DataTypes.STRING,
            allowNull: false
        },
        member: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Guild;
}