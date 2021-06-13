const Sequelize = require("sequelize");
const connection = require("../database/database");
const Company = require("../companies/Company");

const Component = connection.define('components', {
    name:{
        type: Sequelize.STRING,
        allowNull: false 
    },
    about:{
       type: Sequelize.TEXT,
       allowNull: true 
    },
    contactNumber:{
       type: Sequelize.STRING,
       allowNull: true
    },
    instagramLink:{
       type: Sequelize.STRING,
       allowNull: true
    },
    facebookLink:{
       type: Sequelize.STRING,
       allowNull: true
    }
}); 

Component.belongsTo(Company); //1-n hasMany
Company.hasMany(Component); //1-1 belognsTo

//Component.sync({force: true});

module.exports = Component;