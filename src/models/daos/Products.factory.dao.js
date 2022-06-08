const ProductsFileDao = require("./products/Products.file.dao");
const ProductsMemDao = require("./products/Products.mem.dao");
const ProductsMongoDao = require("./products/Products.mongo.dao");

class ProductsFactoryDao {
  static get(type) {
    switch (type) {
      case 'MEM': return new ProductsMemDao()
      case 'FILE':  return new ProductsFileDao(process.cwd() + '/products.json')
      case 'MONGO': return new ProductsMongoDao('ecommerce', 'productos')
      default:  return new ProductsMemDao()
      }
  }
}

module.exports = ProductsFactoryDao;