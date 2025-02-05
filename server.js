const express = require("express");
const app = express();
const path = require("path");
const handlebars = require("express-handlebars");
const database = require("./models/db");
// const { redirect } = require("express/lib/response");

// Config
// inportar arquivos estaticos
app.use(express.static(path.join(__dirname, "assets")));
// Templete engine com isto nos agora não precisamos rescrever as estruturas básicas do html
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// Rotas
    app.get('/', function(req, res){// Rota principal
        res.render("home");
    });

    app.get('/login', function(req, res){
        res.render("login");
    });
    
    app.get('/cadastro', function(req, res){
        res.render("cadastro");
    });

    app.get('/deposito-de-patentes', function(req, res){
        res.render("deposito-de-patentes");
    });
    // metodos posts
    app.post('/cad', (req, res)=>{// cadastro de usuario
        const Cadastro = require("./models/cadastros");
        database.sync();
        res.redirect('/');
    })
    app.post('/dep-patente', (req, res)=>{
        //const Cadastro = require("./models/cadastros");
        //database.sync();
        res.redirect('/');
    })
    app.post('/dash-board-nit', (req, res)=>{
        //const Cadastro = require("./models/cadastros");
        //database.sync();
        res.render("dash-board-nit");
    })

const PORT = process.env.PORT || 3000    
app.listen(PORT, ()=>{
    console.log("Servidor rodando na port: " + PORT);
});