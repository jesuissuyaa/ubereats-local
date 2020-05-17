/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allMicrocmsArticles(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              createdAt
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  result.data.allMicrocmsArticles.edges.forEach((edge, index) => {
    createPage({
      path: edge.node.slug,
      component: path.resolve("./src/templates/place-article.js"),
      context: {
        id: edge.node.id,
      },
    })
  })
}
