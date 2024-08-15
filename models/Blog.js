const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const blogUser = require('./User');

const Blog = sequelize.define('Blog', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
});

Blog.belongsTo(blogUser, { foreignKey: 'userId', onDelete: 'CASCADE' });

module.exports = Blog;
