const posts = []

const resolvers = {
  RootQuery: {
    posts(root, args, context) {
      return posts
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
      return postObject
    }
  },
  Query: {
    hello: () => 'Hello World'
  }
}

module.exports = resolvers
