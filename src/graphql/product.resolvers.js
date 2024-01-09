const getProduct = (_, { id }) => {
  return {
    id,
    name: 'product',
    price: 300.33,
    description: "This a product",
    image: 'http://localhost/image.png',
    createdAt: new Date().toISOString()
  }
}

const getProducts = (_, args) => {
  return []
}

const addProduct = () => {}
const updateProduct = () => {}
const deleteProduct = () => {}

module.exports = { getProduct, getProducts }
