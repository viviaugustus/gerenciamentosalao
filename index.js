const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const connection = require("./database/database");

//Models
const Admin = require("./admin/Admin");
const Attendant = require("./attendants/Attendant");
const Client = require("./clients/Client");
const Company = require("./companies/Company");
const Component = require("./components/Component");
const Gallery = require("./galleries/Gallery");
const OrderPad = require("./orderPads/OrderPad");
const Scheduling = require("./schedules/Scheduling");
const Service = require("./services/Service");

//Controllers
const clientsController = require("./clients/ClientsController");
const adminController = require("./admin/AdminController");

//View engine
app.set('view engine','ejs');

//Session
app.use(session({
    secret: "wfiubwefupwefawrgebrgufgyoerfg9perf",
    cookie: {maxAge: 86400}
}));

//Body parser
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

//Database
connection
    .authenticate()
    .then(() =>{
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    })

    
//define Controllers
app.use("/", clientsController);
app.use("/", adminController);

app.get("/", (request, response)=>{
    response.render("index");
});

app.listen(80, () =>{
    console.log("Servidor rodando");
})