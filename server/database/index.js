const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const models = require('../models')

const env = process.env.NODE_ENV || 'development'
const config = dbConfig[env]

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

module.exports = {
  models: models(sequelize),
  sequelize
}
