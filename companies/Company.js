const Sequelize = require("sequelize");
const connection = require("../database/database");

const Company = connection.define('companies', {
    name:{
        type: Sequelize.STRING,
        allowNull: false 
    },
    cnpj:{
       type: Sequelize.STRING,
       allowNull: false 
    },
    email:{
       type: Sequelize.STRING,
       allowNull: false
    },
    contactNumber:{
       type: Sequelize.STRING,
       allowNull: false
    },
    responsible:{
       type: Sequelize.STRING,
       allowNull: false
    }
}); 

//Company.sync({force: true});

module.exports = Company;