const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')

const typeDefs = `
  type Query {
    hello: String!
    getPerson(name: String, age: Int): String
    getInt(age: Int!): Int
    getFloat(price: Float): Float
    getString: String
    getBoolean: Boolean
    getID: ID
    getNumbers(numbers: [Int!]!): [Int]
  }
`;

const resolvers = {
  Query: {
    hello: () => 'hola mundo',
    getPerson: (_, args) => `Hello ${args.name}, you ${args.age} years old?`,
    getInt: (_, args) => args.age,
    getFloat: (_, args) => args.price,
    getString: () => "Word",
    getBoolean: () => 1 === 1,
    getID: () => "u1232432",
    getNumbers: (_, args) => args.numbers
  }
}

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playgroud: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ]
  });
  await server.start();
  server.applyMiddleware({ app })
}

module.exports = useGraphql
