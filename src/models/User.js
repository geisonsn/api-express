const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');

class User extends Sequelize.Model {}
User.init({
  id: {type: Sequelize.INTEGER, primaryKey: true},
  name: Sequelize.STRING,
  username: Sequelize.STRING,
  gender: Sequelize.STRING
}, {sequelize, modelName: 'user', freezeTableName: true});

module.exports = User;
