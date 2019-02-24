const Sequelize = require('sequelize')
const Post = require('./Post')

module.exports = sequelize => {
  let models = {}

  models['Post'] = Post(sequelize, Sequelize)

  for (let modelName in models) {
    if (models[modelName].associate) {
      models[modelName].associate(models)
    }
  }

  return models
}
