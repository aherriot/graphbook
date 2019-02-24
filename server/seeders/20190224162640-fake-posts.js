'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('SELECT id from "Users";')
      .then(users => {
        const userRows = users[0]

        return queryInterface.bulkInsert(
          'Posts',
          [
            {
              text: 'First post.',
              UserId: userRows[0].id,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              text: 'This is the second post.',
              UserId: userRows[1].id,
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ],
          {}
        )
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {})
  }
}
