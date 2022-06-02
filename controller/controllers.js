const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('login')
})
router.get('/home', (req, res) => {
    res.render('home')
})
router.get('/usuario', (req, res) => {
    res.render('usuario')
})
router.get('/produto', (req, res) => {
    res.render('produto')
})
router.get('/fornecedor', (req, res) => {
    res.render('fornecedor')
})

module.exports = router