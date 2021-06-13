const Sequelize = require("sequelize");
const connection = require("../database/database");
const Company = require("../companies/Company");

const Attendant = connection.define('attendants', {
    name:{
        type: Sequelize.STRING,
        allowNull: false 
    },
    function:{
       type: Sequelize.STRING,
       allowNull: true 
    },
    email:{
       type: Sequelize.STRING,
       allowNull: false
    },
    cpf:{
       type: Sequelize.STRING,
       allowNull: false
    },
    password:{
       type: Sequelize.STRING,
       allowNull: false
    }    

}); 

Attendant.belongsTo(Company); //1-n hasMany
Company.hasMany(Attendant); //1-1 belognsTo

//Attendant.sync({force: true});

module.exports = Attendant;