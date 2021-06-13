const express = require("express");
const router = express.Router();
const Admin = require("./Admin");
const bcrypt = require("bcryptjs");
const adminAuth = require("../middlewares/adminAuth");


router.get("/admin/users", adminAuth,(request, response) =>{
    Admin.findAll().then(admins =>{
        response.render("admin/users/index", {admins: admins});
    });
});

router.get("/admin/users/create", adminAuth, (request, response) =>{
    response.render("admin/users/create");
});

router.post("/users/create", adminAuth,(request, response) =>{
    var name = request.body.name;
    var email = request.body.email;
    var password = request.body.password;

    Admin.findOne({where: {email: email}}).then(admin =>{
        if(admin == undefined){
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(password, salt);

            Admin.create({
                name: name,
                email: email,
                password: hash
            }).then(() =>{
                response.redirect("/admin/users");
            }).catch(err => {
                response.send(err);
            });
        }else{
            response.redirect("/admin/users/create");
        }
    });
});

router.get("/login", (request, response) =>{
    response.render("admin/users/login");
});

router.post("/authenticate", (request, response) =>{

    var email = request.body.email;
    var password = request.body.password;
    
    Admin.findOne({where: {email: email}}).then(admin =>{
        console.log(admin);
        if(admin != undefined){
            var correct = bcrypt.compareSync(password, admin.password);
            if(correct){
                request.session.admin = {
                    id: admin.id,
                    email: email
                }
                response.redirect("/admin/clients");
            }else{
                response.redirect("/login");
            }
        }else{
            response.redirect("/login");
        }
    })
});

router.get("/logout", (request, response) =>{
    request.session.admin = undefined;
    request.redirect("/");
})


module.exports = router;