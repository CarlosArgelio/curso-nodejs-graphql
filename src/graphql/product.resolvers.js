const ProductsService = require('./../services/product.service');
const service = new ProductsService

const getProduct = async (_, { id }) => {
  const product = await service.findOne(id);
  return product
}

const getProducts = async (_, args) => {
  const product = await service.find({});
  return product
}

const addProduct = () => {}
const updateProduct = () => {}
const deleteProduct = () => {}

module.exports = { getProduct, getProducts }
