const Sequelize = require("sequelize")

const sequelize = new Sequelize("postgres://postgres:Gogetit2021@localhost:5432/eleven-journal")

module.exports = sequelize