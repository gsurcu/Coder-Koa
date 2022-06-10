const schema = require('../../models/schemas/graphql/Product.graphql.schema')
const { graphqlHTTP } = require('express-graphql');
const { getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../../models/repository/Products.repository");

const graphql = graphqlHTTP({
  schema: schema,
  rootValue: {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
  },
  graphiql: true,
})

module.exports = graphql;