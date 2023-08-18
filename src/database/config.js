const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: "postgres",
    username: "username",
    password: 'xXqMxBwj9cdemVH0Ykrq2Hawygdc58PL',
    database:'blog_m7nr',
    host:"dpg-cjfcek2nip6c73bke9n0-a.oregon-postgres.render.com",
    port:5432,
    logging:false,
    dialectOptions: {
    ssl: {
      require: true, // Requiere conexión SSL/TLS
      rejectUnauthorized: false, // Ignora los certificados autofirmados, utiliza un certificado CA válido en producción
    },
  },
})

module.exports = { db }
