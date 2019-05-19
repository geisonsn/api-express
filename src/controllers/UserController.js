const User = require('../models/User');

class UserController {
  async get(req, res) {
    const user = await User.findByPk(req.params.id);
    return res.status(200).json(user);
  }
  async list(req, res) {
    const users = await User.findAll();
    return res.status(200).json(users);
  }
  async create(req, res) {
    await User.create(req.body);
    return res.sendStatus(201);
  }
  async update(req, res) {
    console.log(req.body);
    await User.update(req.body, {where: {id: req.params.id}});
    return res.sendStatus(204);
  }
  async delete(req, res) {
    await User.destroy({where: {id: req.params.id}});
    return res.sendStatus(204);
  }
}

module.exports = new UserController();