const { getProduct, getProducts, addProduct } = require('./product.resolvers')

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
    product: getProduct,
    products: getProducts
  },
  Mutation: {
    addProduct
  }
}

module.exports = resolvers
