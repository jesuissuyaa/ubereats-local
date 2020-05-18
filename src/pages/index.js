import React from "react"
import { Link, graphql } from "gatsby"

import { Box, Heading } from "@chakra-ui/core"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const edges = data.allMicrocmsArticles.edges
  // console.log(edges)
  // edges.forEach(edge => {
  //   console.log(edge.node.title)
  // })

  return (
    <Layout>
      <SEO title="トップ" />
      {/* <p>Uber Eatsで注文できる個人経営のお店を紹介するサイトです</p> */}
      <Heading as="h2" size="md" mt={4}>
        新着記事
      </Heading>
      {edges.map(edge => (
        <Link key={edge.node.slug} to={`/${edge.node.slug}`}>
          <Box borderWidth="1px" rounded="lg" p={4} m={4}>
            <Heading as="h3" size="md">
              {edge.node.title}
            </Heading>
            {edge.node.description}
          </Box>
        </Link>
      ))}
      {/* sample: how to use image */}
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
      {/* sample: how to link */}
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMicrocmsArticles(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          slug
          title
          description
          createdAt
          food_genres {
            name
          }
          stations {
            name
          }
          price {
            name
          }
          city {
            name
          }
        }
      }
    }
  }
`

export default IndexPage
