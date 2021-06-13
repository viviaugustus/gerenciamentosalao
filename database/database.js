const Sequelize = require('sequelize');

const connection = new Sequelize('gerenciamentosalao','root','Athlon2x2240',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;