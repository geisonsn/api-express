const express = require('express');
const routes = express.Router();

routes.get('/teste', (req, res) => {
  return res.send('/teste');
});

routes.get('/teste/:id', (req, res) => {
  return res.send(`/teste/${req.params.id}`);
});

module.exports = routes;