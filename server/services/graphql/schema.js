const gql = require('apollo-server-express').gql

const typeDefinitions = gql`
  type Post {
    id: Int
    text: String
    user: User
  }

  type RootQuery {
    posts: [Post]
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }

  type User {
    avatar: String
    username: String
  }

  input PostInput {
    text: String!
  }

  input UserInput {
    username: String!
    avatar: String!
  }

  type RootMutation {
    addPost(post: PostInput!, user: UserInput!): Post
  }
`

module.exports = [typeDefinitions]
