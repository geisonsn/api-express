const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

// class User {
//   get() {
//     return {id: 1, nome: 'Fulano'};
//   }
//   list() {
//     return [
//       {id: 1, nome: 'Beltrano'},
//       {id: 2, nome: 'Fulano'},
//       {id: 3, nome: 'Sicrano'}
//     ];
//   }
// }

// module.exports = new User();


class User extends Sequelize.Model {}
User.init({
  id: {type: Sequelize.INTEGER, primaryKey: true},
  name: Sequelize.STRING,
  username: Sequelize.STRING,
  gender: Sequelize.STRING
}, {sequelize, modelName: 'user', freezeTableName: true});
