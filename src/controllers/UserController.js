const user = require('../models/User');

class UserController {
  constructor(sequelize) {
    this.sequelize = sequelize;
  }
  get(req, res) {

    console.log(`/usuario/${req.params.id}`);
    return res.status(200).json(user.get());
  }
  list(req, res) {
    console.log(`/usuario`);
    return res.status(200).json(user.list());
  }
}

module.exports = (sequelize) => {
  return new UserController(sequelize);
};