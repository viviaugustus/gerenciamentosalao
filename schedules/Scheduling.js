const Sequelize = require("sequelize");
const connection = require("../database/database");
const Client = require("../clients/Client");
const Attendant = require("../attendants/Attendant");
const Service = require("../services/Service");
const Company = require("../companies/Company");

const Scheduling = connection.define('schedules', {
    date:{
       type: Sequelize.DATE,
       allowNull: false 
    },
    hour: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Scheduling.belongsTo(Company); //1-n hasMany
Company.hasMany(Scheduling); //1-1 belognsTo

Client.hasMany(Scheduling); //1-n hasMany
Scheduling.belongsTo(Client); //1-1 belognsTo

Attendant.hasMany(Scheduling);
Scheduling.belongsTo(Attendant);

Service.hasMany(Scheduling);
Scheduling.belongsTo(Service);

module.exports = Scheduling;