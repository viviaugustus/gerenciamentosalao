const Sequelize = require("sequelize");
const connection = require("../database/database");
const Company = require("../companies/Company");


const Client = connection.define('clients', {
    name:{
       type: Sequelize.STRING,
       allowNull: false 
    },
    email:{
        type: Sequelize.STRING,
        allowNull: true 
     }, 
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true
    },
});

Client.belongsTo(Company); //1-n hasMany
Company.hasMany(Client); //1-1 belognsTo

//Client.sync({force: true});

module.exports = Client;