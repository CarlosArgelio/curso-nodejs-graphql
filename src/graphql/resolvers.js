const { getProduct, getProducts, addProduct, updateProduct, deleteProduct, getProductByCategory } = require('./product.resolvers')
const { login } = require('./auth.resolvers')
const { addCategory, getCategory } = require('./category.resolvers')
const { RegularExpression } = require('graphql-scalars')

const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}/)

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
    products: getProducts,
    category: getCategory
  },
  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory
  },
  CategoryNameType,
  Category: {
    products: getProductByCategory
  }
}

module.exports = resolvers
