const { DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('turistic_activity', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        difficulty: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        season: {
            type: DataTypes.ENUM('summer', 'winter', 'spring', 'autumn'),
            allowNull: false,
        },
    });
};