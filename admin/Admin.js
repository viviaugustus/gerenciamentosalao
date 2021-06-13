const Sequelize = require("sequelize");
const connection = require("../database/database");
const Company = require("../companies/Company");

const Admin = connection.define('admins', {
    name:{
        type: Sequelize.STRING,
        allowNull: false 
     },
     email:{
        type: Sequelize.STRING,
        allowNull: false
     },
     senha:{
        type: Sequelize.STRING,
        allowNull: false
     }
});

Admin.belongsTo(Company); //1-n hasMany
Company.hasMany(Admin); //1-1 belognsTo

//Admin.sync({force: true});

module.exports = Admin; 