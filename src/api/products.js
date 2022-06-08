const config = require("../config");
const ProductsFactoryDao = require("../models/daos/Products.factory.dao");

class ApiProducts {
  constructor() {
    this.productsDao =  ProductsFactoryDao.get(config.TIPO_PERSISTENCIA)
  }
  async getProducts(id) { return await this.productsDao.getItem(id) }

  async saveProduct(product) {
    return await this.productsDao.saveItem(product);
  }

  async updateProduct(id, product) {
    return await this.productsDao.updateItem(id, product)
  }

  async deleteProduct(id) { return await this.productsDao.delItem(id) }

  // async validateProduct(product, required) {
  //   try {  
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }
}

const instance = new ApiProducts()

module.exports = instance;