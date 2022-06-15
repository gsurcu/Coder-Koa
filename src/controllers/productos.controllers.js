const { errorLog } = require("../middlewares/logger");
const ProductsRepository = require("../models/repository/Products.repository");

class ProductsController {
  constructor() {
    this.productsDao = ProductsRepository;    
  }

  async create(ctx) {
    try {
      const product = ctx.request?.body;
      
      if (product) {
        const newProduct =   await this.productsDao.createProduct({product});
        if (newProduct) {
          ctx.response.status = 201;
          ctx.body = {
            message: newProduct,
          }
          // return res.status(200).json(newProduct);
        }
        ctx.response.status = 404;
        ctx.body = {
          message: "No se pudo guardar el producto"
        }
        // return res.status(404).send("No se pudo guardar el producto")
      }
      ctx.response.status = 400;
      ctx.body = {
        message: "Faltan datos"
      }
      // return res.status(400).send("Faltan datos");
    } catch (error) {
      errorLog(error.message)
    }
  };

  async read(ctx) {console.log('ok')
    try {
      const id = ctx.params?.id; //console.log('ok')
      if (id) {
        const product = await this.productsDao.getProductById({id});
        ctx.response.status = 200;
        ctx.body = {
          message: product,
        }
        // return res.status(200).json(product);
      }
      const products = await this.productsDao.getAllProducts({});
      ctx.response.status = 200;
      ctx.body = {
        message: products,
      }
      // return res.status(200).json(products);
    } catch (error) {
      errorLog(error.message);
      ctx.response.status = 404;
    }
  }
  
  async update(ctx) {
    try {
      const id = ctx.params?.id;
      const item = ctx.body;
      
      const updatedProduct = await this.productsDao.updateProduct({ id, item });
      if (updatedProduct) {
        ctx.response.status = 200;
        ctx.body = {
          message: updatedProduct,
        }
        // return res.status(200).json(updatedProduct);
      }
      ctx.response.status = 404;
      // return res.status(404).send("Producto no encontrado");      
    } catch (error) {
      errorLog(error.message)
    }
  };

  async delete(ctx) {
    try {
      const { id } = ctx.params;

      const deletedProduct = await this.productsDao.deleteProduct(id);
      if (deletedProduct) {
        ctx.response.status = 200;
        ctx.body = {
          message: deletedProduct,
        }
        // return res.status(200).json(deletedProduct);
      }
      ctx.response.status = 404;
      // return res.status(404).json({mensaje: "Producto no encontrado"});
    } catch (error) {
      errorLog(error.message)
    }
  };
}


module.exports = ProductsController;