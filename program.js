const express = require("express")
const app = express()
//const connection = require("/database/database")
const bodyParser = require("body-parser")

app.set('view engine', 'ejs')
app.use(express.static('public'))

/* 
connection
        .authenticate()
        .then(()=>{
            console.log("Conecção com banco de dados estabelecida")
        }) .catch((error)=>{
            console.log("error")
        })
*/
//Rota principal
app.get("/", (req, res) =>{
    res.render("home")
})

//Rota cadastro
app.get("/cadastro", (req, res)=>{
    res.render("cadastro")
})

// rota carrinho

app.get("/carrinho", (req, res)=>{
    res.render("carrinho")
})

app.post("/salvarLogin", (req,res) =>{
    let email = req.body.email
    let senha = req.body.senha
})

app.post("/salvarcadastro", (req,res) =>{
    let nome = req.body.nome
    let Sobrenome = req.body.Sobrenome
    let Email = req.body.Email
    let Data = req.body.Data
    let Cpf = req.body.Cpf
    let senha = req.body.senha
})


app.listen(8080, ()=>{
    console.log("Programa rodando!!")
})