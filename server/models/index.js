const Sequelize = require('sequelize')
const Post = require('./Post')
const User = require('./User')

module.exports = sequelize => {
  let models = {}

  models['Post'] = Post(sequelize, Sequelize)
  models['User'] = User(sequelize, Sequelize)

  for (let modelName in models) {
    if (models[modelName].associate) {
      models[modelName].associate(models)
    }
  }

  return models
}
