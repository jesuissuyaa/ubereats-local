import React from "react"
import { graphql } from "gatsby"

import { Heading } from "@chakra-ui/core"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import ArticleCard from "../../components/article-card"

const FoodGenrePage = ({ pageContext, data }) => {
  const articleEdges = data.allMicrocmsArticle.edges
  return (
    <Layout>
      <SEO title={`料理ジャンル > ${pageContext.name}`} />
      <Heading as="h2" size="md" mt={4}>
        {pageContext.name}のお店
      </Heading>
      {articleEdges.map((edge, i) => (
        <ArticleCard key={i} edge={edge} />
      ))}
    </Layout>
  )
}

export default FoodGenrePage

export const query = graphql`
  query($foodGenreId: String!) {
    allMicrocmsArticle(
      sort: { fields: createdAt, order: DESC }
      filter: { food_genres: { elemMatch: { id: { eq: $foodGenreId } } } }
    ) {
      edges {
        node {
          slug
          title
          description
          createdAt(formatString: "YYYY年M月D日", locale: "ja")
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
