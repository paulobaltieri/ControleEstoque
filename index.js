const express = require('express')
const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser')

app.use(express.static('public'))

//Informando ao EXPRESS a engine que estou utilizando
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('screenPassword.ejs')
})
app.get('/home', (req, res) => {
    res.render('home.ejs')
})
app.get('/produtos',(req,res)=>{
    res.render('produtos')
})
//Iniciando aplicação
app.listen(3000, () => {
    console.log('Aplicação iniciada 🚀 ')
})