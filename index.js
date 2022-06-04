const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const controller = require('./controller/controllers')
const post =  require('./models/Post')
const session = require('express-session')
const flush = require('connect-flash')

//Informando ao EXPRESS a engine que estou utilizando
app.set('view engine', 'ejs')
app.use(express.static('public'))

//body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
 
// flash message
app.use(session({
   secret: 'secret',
   cookie: {maxAge: 600000} ,
   resave: false,
   saveUninitialized: false
}))
app.use(flush())


//database
connection
    .authenticate()
    .then(()=>{
        console.log('Conexão realizada com sucesso 👍 ')
    })
    .catch((error)=>{
        console.log(error , 'Falha na conexão 👎 ')
    })

app.use('/',controller)


//Iniciando aplicação
app.listen(3000, () => {
    console.log('Aplicação iniciada 🚀 ')
})