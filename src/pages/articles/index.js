import React from "react"
import { graphql } from "gatsby"

import { Heading } from "@chakra-ui/core"

import Layout from "../../components/layout"
// import Image from "../components/image"
import SEO from "../../components/seo"
import ArticleCard from "../../components/article-card"

// TODO: add pagination
const ArticlesPage = ({ data }) => {
  const articleEdges = data.allMicrocmsArticle.edges

  return (
    <Layout>
      <SEO title={`記事一覧`} />
      <Heading as="h2" size="md" mt={4}>
        記事一覧
      </Heading>
      {articleEdges.map((edge, i) => (
        <ArticleCard key={i} edge={edge} />
      ))}
    </Layout>
  )
}

export default ArticlesPage

export const query = graphql`
  query {
    allMicrocmsArticle(sort: { fields: createdAt, order: DESC }) {
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
