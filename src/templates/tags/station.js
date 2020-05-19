import React from "react"
import { graphql } from "gatsby"

import { Heading } from "@chakra-ui/core"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import ArticleCard from "../../components/article-card"

const StationPage = ({ pageContext, data }) => {
  const articleEdges = data.allMicrocmsArticle.edges
  return (
    <Layout>
      <SEO title={`価格帯 > ${pageContext.name}`} />
      <Heading as="h2" size="md" mt={4}>
        {pageContext.name}のお店
      </Heading>
      {articleEdges.map((edge, i) => (
        <ArticleCard key={i} edge={edge} />
      ))}
    </Layout>
  )
}

export default StationPage

export const query = graphql`
  query($stationId: String!) {
    allMicrocmsArticle(
      sort: { fields: createdAt, order: DESC }
      filter: { stations: { elemMatch: { id: { eq: $stationId } } } }
    ) {
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
