const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const blogUser = sequelize.define('blogUser', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = blogUser;
