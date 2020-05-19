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
        allMicrocmsArticle(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              createdAt
              slug
            }
          }
        }
        allMicrocmsFoodGenre {
          edges {
            node {
              foodGenreId
              name
            }
          }
        }
        allMicrocmsPrice {
          edges {
            node {
              priceId
              name
            }
          }
        }
        allMicrocmsCity {
          edges {
            node {
              cityId
              name
            }
          }
        }
        allMicrocmsStation {
          edges {
            node {
              stationId
              name
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const {
    allMicrocmsArticle,
    allMicrocmsFoodGenre,
    allMicrocmsPrice,
    allMicrocmsCity,
    allMicrocmsStation,
  } = result.data

  allMicrocmsArticle.edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: path.resolve("./src/templates/place-article.js"),
      context: {
        id: edge.node.id,
      },
    })
  })

  allMicrocmsFoodGenre.edges.forEach(edge => {
    createPage({
      path: `food-genre/${edge.node.name}`,
      component: path.resolve("./src/templates/tags/food-genre.js"),
      context: {
        foodGenreId: edge.node.foodGenreId,
        name: edge.node.name,
      },
    })
  })

  allMicrocmsPrice.edges.forEach(edge => {
    createPage({
      path: `price/${edge.node.name}`,
      component: path.resolve("./src/templates/tags/price.js"),
      context: {
        priceId: edge.node.priceId,
        name: edge.node.name,
      },
    })
  })

  allMicrocmsCity.edges.forEach(edge => {
    createPage({
      path: `city/${edge.node.name}`,
      component: path.resolve("./src/templates/tags/city.js"),
      context: {
        cityId: edge.node.cityId,
        name: edge.node.name,
      },
    })
  })

  allMicrocmsStation.edges.forEach(edge => {
    createPage({
      path: `station/${edge.node.name}`,
      component: path.resolve("./src/templates/tags/station.js"),
      context: {
        stationId: edge.node.stationId,
        name: edge.node.name,
      },
    })
  })
}
