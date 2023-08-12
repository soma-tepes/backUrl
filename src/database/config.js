const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: "postgres",
    username: "postgres",
    password: '',
    database:'webtester',
    host:"localhost",
    port:5432,
    logging:false
})

module.exports = { db }