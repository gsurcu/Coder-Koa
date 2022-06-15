const Router = require('koa-router');
const ProductsController = require('../../../controllers/productos.controllers')
const router = new Router({
  prefix: '/products'
});

class ProductsRouter {
  constructor() {
    this.productsController = new ProductsController()
  }
  start() {
    router.get('/:id?', this.productsController.read);
    router.post('/', this.productsController.create);
    router.put('/:id', this.productsController.update);
    router.delete('/:id', this.productsController.delete);
    return router.routes()
  }
}

module.exports = ProductsRouter;