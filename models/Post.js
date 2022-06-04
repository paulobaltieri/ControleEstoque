const Sequelize = require('sequelize')
const connect = require('../database/database')
const post = connect.define('usuario', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    middlename: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telephone: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    cellphone: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false
    },
    district: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

post.sync({ force: false })
    .then(() => {
        console.log('Tabela criada com sucesso! 👍 ')
    });

module.exports = post    