// data.js
const categories = [
  { id: "c1", name: "Electronics" },
  { id: "c2", name: "Clothing" },
];

const products = [
  { id: "p1", name: "Bluetooth Speaker", price: 49.99, categoryId: "c1" },
  { id: "p2", name: "Wireless Mouse", price: 19.99, categoryId: "c1" },
  { id: "p3", name: "Denim Jacket", price: 59.99, categoryId: "c2" },
  { id: "p4", name: "Leather Boots", price: 89.99, categoryId: "c2" },
];

// module.exports = { categories, products };

const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const express = require("express");

const app = express();

//building the schema:
const schema = buildSchema(`
  type Category {
  id:ID!
  name:String!
  products:[Product!]!
}

type Product {
  id:ID!
  name:String!
  price:Float!
  category:Category!
}

type Query {
  getCategory(id:ID!): Category
  products(categoryId: ID): [Product!]!
}
  
`);

const resolvers = {
  getCategory: ({ id }) => {
    // find the raw data object
    const cat = categories.find((c) => c.id === id);
    if (!cat) return null;

    // return an object that *includes* a `products` function
    return {
      id: cat.id,
      name: cat.name,
      // default field resolver will call this method to resolve `products`
      products: () => products.filter((p) => p.categoryId === cat.id),
    };
  },

  // your root->products query still works as before
  products: ({ categoryId }) =>
    categoryId ? products.filter((p) => p.categoryId === categoryId) : products,
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(4000, () => console.log("Server at http://localhost:4000/graphql"));
