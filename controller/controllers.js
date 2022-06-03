const express = require('express')
const router = express.Router()
const post = require('../models/Post')

router.get('/', (req, res) => {
    res.render('login')
})
router.get('/home', (req, res) => {
    res.render('home')
})
router.get('/usuario', (req, res) => {
    res.render('usuario')
})
router.post('/salvarFormulario', (req, res) => {
    let name = req.body.name
    let middlename = req.body.middlename
    let email = req.body.email
    let telephone = req.body.telephone
    let cellphone = req.body.cellphone
    let street = req.body.street
    let district = req.body.district
    let state = req.body.state
    let cep = req.body.cep

    post.create({
        name: name,
        middlename: middlename,
        email: email,
        telephone: telephone,
        cellphone: cellphone,
        street: street,
        district: district,
        state: state,
        cep: cep,
    }).then(()=>{
        res.redirect('Usuario')  
    })
})
router.get('/produto', (req, res) => {
    res.render('produto')
})
router.get('/fornecedor', (req, res) => {
    res.render('fornecedor')
})

module.exports = router