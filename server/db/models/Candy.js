const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    notEmpty: true
  },
  quantity: {
    type: Sequelize.INTEGER,
    max: 10
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'src.jpeg'
  }
});
