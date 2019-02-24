const ApolloServer = require('apollo-server-express').ApolloServer
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema

const Resolvers = require('./resolvers')
const Schema = require('./schema')

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers
})

const server = new ApolloServer({
  schema: executableSchema,
  context: ({ req }) => req
})

module.exports = server
