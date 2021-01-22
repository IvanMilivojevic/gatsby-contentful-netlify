const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetProducts {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.products.nodes.forEach(product => {
    createPage({
      path: product.slug,
      component: path.resolve(`src/templates/product-detail.js`),
      context: {
        slug: product.slug,
      },
    })
  })
}
