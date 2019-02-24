const ApolloServer = require('apollo-server-express').ApolloServer
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema

const Resolvers = require('./resolvers')
const Schema = require('./schema')

module.exports = utils => {
  const executableSchema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers.call(utils)
  })

  const server = new ApolloServer({
    schema: executableSchema,
    context: ({ req }) => req
  })

  return server
}
