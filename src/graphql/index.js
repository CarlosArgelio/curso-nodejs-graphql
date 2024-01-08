const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')

const typeDefs = `
  type Query {
    hello: String
    getPerson(name: String, age: Int): String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'hola mundo',
    getPerson: (_, args) => `Hello ${args.name}, you ${args.age} years old?`
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
