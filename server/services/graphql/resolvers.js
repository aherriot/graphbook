const logger = require('../../helpers/logger')

const posts = []

module.exports = function() {
  const { models } = this.db

  const resolvers = {
    RootQuery: {
      posts(root, args, context) {
        return models.Post.findAll({ order: [['createdAt', 'DESC']] })
      }
    },
    RootMutation: {
      addPost(root, { post, user }, context) {
        const postObject = {
          ...post,
          user,
          id: posts.length + 1
        }

        posts.push(postObject)

        logger.log({ level: 'info', message: 'Post was created' })

        return postObject
      }
    },
    Query: {
      hello: () => 'Hello World'
    }
  }

  return resolvers
}
