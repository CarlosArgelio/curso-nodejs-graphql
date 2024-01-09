const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')
const { loadFiles } = require('@graphql-tools/load-files')



const resolvers = {
  Query: {
    hello: () => 'hola mundo',
    getPerson: (_, args) => `Hello ${args.name}, you ${args.age} years old?`,
    getInt: (_, args) => args.age,
    getFloat: (_, args) => args.price,
    getString: () => "Word",
    getBoolean: () => 1 === 1,
    getID: () => "u1232432",
    getNumbers: (_, args) => args.numbers,
    getProduct: () => {
      return {
        id: '123',
        name: 'product',
        price: 300.33,
        description: "This a product",
        image: 'http://localhost/image.png',
        createdAt: new Date().toISOString()
      }
    }
  }
}

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles('./src/**/*.graphql'),
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
