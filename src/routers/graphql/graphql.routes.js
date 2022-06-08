const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql');
const { getProducts, saveProduct, updateProduct, deleteProduct } = require('../../api/products');
const schema = buildSchema(`
  type Product {
    _id: ID,
    title: String,
    price: Float,
    imgUrl: String,
  }

  type ProductInput {
    title: String,
    price: Float,
    imgUrl: String,
  }

  type Query {
    getProducts: [Product],
    getProducts( id: ID!): Product,
  }
  
  type Mutation {
    saveProduct(product: ProductInput): Product,
    updateProduct( id: ID!, product: ProductInput): Product,
    deleteProduct( id: ID!): Product,
  }
`)

const graphql = graphqlHTTP({
  schema: schema,
  rootValue: {
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
  },
  graphiql: true,
})

module.exports = graphql;