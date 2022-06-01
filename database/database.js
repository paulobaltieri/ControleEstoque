const Sequelize = require('sequelize')

const connection = new Sequelize('pegasusdb','root','root',{
  host:'localhost',
  dialect:'mysql'  
})

module.exports = connection