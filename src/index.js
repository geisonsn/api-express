const app = require('./config/express');
// const sequelize = require('./config/sequelize');


// const userController = require('./controllers/UserController')(sequelize);

// app.get('/usuario/:id', userController.get);
// app.get('/usuario', userController.list);


const Sequelize = require('sequelize');

// require('./config/sequelize');
// const User = require('./models/User');

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', { 
    host: 'localhost', 
    dialect: 'postgres', 
    pool: { 
        max: 5, 
        min: 0, 
        acquire: 30000,
        idle: 1000
    },
    define : {
            timestamps: false
    }
});

sequelize.authenticate().then(() => {
    console.log('Connection stablished');
})
.catch((error) => {
    console.log('Unable to connect to the database: ', error);
});

class User extends Sequelize.Model {}
User.init({
  id: {type: Sequelize.INTEGER, primaryKey: true},
  name: Sequelize.STRING,
  username: Sequelize.STRING,
  gender: Sequelize.STRING
}, {sequelize, modelName: 'user', freezeTableName: true});

app.get('/user', async (req, res, next) => {
  console.log('Accessing /use');
  const users = await User.findAll();
  console.log(users);
  return res.status(200).json(users);
});

app.get('/user/:id', async (req, res, next) => {
  console.log('Accessing /use/:1');
  const user = await User.findByPk(req.params.id);
  console.log(user);
  return res.status(200).json(user);
});

app.listen(3333, (res, req, next) => {
  console.log('Listening on port 3333');
});