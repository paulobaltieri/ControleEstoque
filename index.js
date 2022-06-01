const express = require('express')
const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser')
const connection = require('./database/database')

//Informando ao EXPRESS a engine que estou utilizando
app.set('view engine', 'ejs')
app.use(express.static('public'))

//body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//database
connection
    .authenticate()
    .then(()=>{
        console.log('Conexão realizada com sucesso 👍 ')
    })
    .catch((error)=>{
        console.log(error , 'Falha na conexão 👎 ')
    })

//rotas
app.get('/', (req, res) => {
    res.render('login.ejs')
})
app.get('/home', (req, res) => {
    res.render('home.ejs')
})
app.get('/usuario', (req, res) => {
    res.render('usuario')
})
app.get('/produto', (req, res) => {
    res.render('produto')
})
app.get('/fornecedor', (req, res) => {
    res.render('fornecedor')
})
//Iniciando aplicação
app.listen(3000, () => {
    console.log('Aplicação iniciada 🚀 ')
})