const Sequelize = require("sequelize");
const connection = require("../database/database");
const Company = require("../companies/Company");

const Service = connection.define('services', {
    name:{
        type: Sequelize.STRING,
        allowNull: false 
     },
     price:{
        type: Sequelize.FLOAT,
        allowNull: false 
     },
     time:{
        type: Sequelize.FLOAT,
        allowNull: false
     }  
}); 

Service.belongsTo(Company); //1-n hasMany
Company.hasMany(Service); //1-1 belognsTo

//Service.sync({force: true});

module.exports = Service;