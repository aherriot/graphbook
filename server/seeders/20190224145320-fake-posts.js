'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Posts',
      [
        {
          text: 'First post.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          text: 'This is the second post.',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {})
  }
}
