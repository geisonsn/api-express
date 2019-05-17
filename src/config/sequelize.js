const Sequelize = require('sequelize');

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

module.exports = sequelize;
