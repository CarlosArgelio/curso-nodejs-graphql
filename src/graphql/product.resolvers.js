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

const addProduct = async (_, { dto }) => {
  const newProduct = await service.create(dto);
  return newProduct
}
const updateProduct = () => {}
const deleteProduct = () => {}

module.exports = { getProduct, getProducts, addProduct }
