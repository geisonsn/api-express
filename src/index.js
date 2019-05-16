const app = require('./config/express');
const userController = require('./controllers/UserController');

app.get('/usuario/:id', userController.get);
app.get('/usuario', userController.list);

app.listen(3333, (res, req, next) => {
  console.log('Listening on port 3333');
});