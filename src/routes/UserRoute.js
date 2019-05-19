const express = require('express');
const routes = express.Router();
const UserController = require('../controllers/UserController');

routes.get('/user', UserController.list);
routes.get('/user/:id', UserController.get);
routes.post('/user', UserController.create);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

module.exports = routes;