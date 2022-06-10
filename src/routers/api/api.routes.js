const Router = require('koa-router');
const ProductsRouter = require('./products/products.routes');
const CartsRouter = require('./cart/cart.routes');
const router = new Router({
  prefix: '/api'
});

class ApiRouter {
  constructor() {
    this.productsRoutes = new ProductsRouter();
    this.cartsRoutes = new CartsRouter();
  }
  start() {
    //Routes
    router.use(this.productsRoutes.start());
    router.use(this.cartsRoutes.start());
    return router.routes();
  }
}

module.exports = ApiRouter;