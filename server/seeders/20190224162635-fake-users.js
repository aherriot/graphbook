'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          avatar: '/uploads/avatar1.png',
          username: 'alice',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          avatar: '/uploads/avatar2.png',
          username: 'bob',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
