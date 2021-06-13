const Sequelize = require("sequelize");
const connection = require("../database/database");
const Company = require("../companies/Company");

const Gallery = connection.define('galleries', {
    name:{
        type: Sequelize.STRING,
        allowNull: false 
    },
    size:{
       type: Sequelize.STRING,
       allowNull: false 
    },
    key:{
       type: Sequelize.STRING,
       allowNull: false
    },
    url:{
       type: Sequelize.STRING,
       allowNull: false
    }
});

Gallery.belongsTo(Company); //1-n hasMany
Company.hasMany(Gallery); //1-1 belognsTo

//Gallery.sync({force: true});

module.exports = Gallery;