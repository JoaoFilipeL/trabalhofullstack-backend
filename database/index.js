const Sequelize = require('sequelize')
const config = require('../config/database')

const Pessoas = require('../models/Pessoas')

const connection = new Sequelize(config)

module.exports = connection;