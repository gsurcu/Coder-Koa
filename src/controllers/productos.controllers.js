const ApiProducts = require("../api/products");

class ProductsController {
  constructor() {
    this.productsDao = ApiProducts
    
  }

  create = async (req, res) => {
    try {
      const {title, price, imgUrl, code, description, stock} = req.body;
      
      if (title && price && imgUrl && code && description && stock) {
        const nuevoProducto =   await this.productsDao.saveProduct({title, price, imgUrl, code, description, stock });
        if (nuevoProducto) {
          return res.status(200).json(nuevoProducto);
        }
        return res.status(404).send("No se pudo guardar el producto")
      }
      return res.status(400).send("Faltan datos");
    } catch (error) {
      
    }
  };

  list = async (req, res) => {
    try {
      const { id } = req.params;
      const producto = await this.productsDao.getProducts(id);
      return res.status(200).json(producto);
    } catch (error) {
      
    }
  }
  
  update = async (req, res) => {
    try {
      const { id } = req.params;
      const item = req.body;
      
      const productoActualizado = await this.productsDao.updateProduct( id, item );
      if (productoActualizado) {
        return res.status(200).json(productoActualizado);
      }
      return res.status(404).send("Producto no encontrado");      
    } catch (error) {
      
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;

      const productoEliminado = await this.productsDao.deleteProduct(id);
      if (productoEliminado) {
        return res.status(200).json(productoEliminado);
      }
      return res.status(404).json({mensaje: "Producto no encontrado"});
    } catch (error) {
      
    }
  };
}


module.exports = ProductsController;