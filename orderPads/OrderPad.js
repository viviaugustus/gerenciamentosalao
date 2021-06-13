const Sequelize = require("sequelize");
const connection = require("../database/database");
const Client = require("../clients/Client");
const Attendant = require("../attendants/Attendant");
const Service = require("../services/Service");
const Company = require("../companies/Company");

const OrderPad = connection.define('orderPads', {
    situation: {
        type: Sequelize.STRING,
        allowNull: false
    },
});
 
OrderPad.belongsTo(Company); //1-n hasMany
Company.hasMany(OrderPad); //1-1 belognsTo

Client.hasMany(OrderPad); //1-n hasMany
OrderPad.belongsTo(Client); //1-1 belognsTo

Attendant.hasMany(OrderPad);
OrderPad.belongsTo(Attendant);

Service.hasMany(OrderPad);
OrderPad.belongsTo(Service);

module.exports = OrderPad;