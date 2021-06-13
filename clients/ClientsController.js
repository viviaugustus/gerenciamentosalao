const express = require("express");
const router = express.Router();
const Client = require("./Client");
const adminAuth = require("../middlewares/adminAuth");

router.get("/admin/clients/new", adminAuth, (request, response) => {
    response.render("admin/clients/create");
});

router.post("/clients/save", (request, response) => {
    var name = request.body.name;
    var cpf = request.body.cpf;
    var email = request.body.email;
    var phoneNumber = request.body.phoneNumber;
    var address = request.body.address;

    if(name != undefined || email != undefined || phoneNumber != undefined){
        Client.create({
            name: name,
            cpf: cpf,
            email: email,
            phoneNumber: phoneNumber,
            address: address
        }).then(() =>{
            response.redirect("/admin/clients");
        });

    }else{
        response.redirect("/admin/clients/new");
    }
});

router.get("/admin/clients", adminAuth, (request, response) => {
    Client.findAll().then(clients =>{
        response.render("admin/clients/index", {clients: clients});
    });
});

router.post("/clients/delete", (request, response) => {
    var id = request.body.id;
    if(id != undefined){
        if(!isNaN(id)){
            Client.destroy({
                where: {
                    id: id
                }
            }).then(() =>{
                response.redirect("/admin/clients");
            });

        }else{
            response.redirect("/admin/clients");
        }
    }else{
        response.redirect("/admin/clients");
    }
});

router.get("/admin/clients/edit/:id", adminAuth, (request, response) => {
    var id = request.params.id;

    if(isNaN(id)){
        response.redirect("/admin/clients");
    }

    Client.findByPk(id).then(cliente =>{
        if(cliente != undefined){
            response.render("admin/clients/edit", {cliente: cliente});
        }else{
            response.redirect("/admin/clients");
        }
    }).catch(erro => {
        response.redirect("/admin/clients");
    });
});

router.post("/clients/update", (request, response) => {
    var id = request.body.id;
    var name = request.body.name;
    var cpf = request.body.cpf;
    var email = request.body.email;
    var phoneNumber = request.body.phoneNumber;
    var address = request.body.address;

    if(name != undefined || email != undefined || phoneNumber != undefined){

        Client.update({ 
            name: name,
            cpf: cpf,
            email: email,
            phoneNumber: phoneNumber,
            address: address
        },{
            where: {
                id: id
            }
        }).then(() =>{
            response.redirect("/admin/clients");
        });
    }else{
        response.redirect("/admin/clients");
    }
});


module.exports = router;