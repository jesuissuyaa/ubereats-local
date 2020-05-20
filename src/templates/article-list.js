import React from "react"
import { graphql, Link } from "gatsby"

import { Heading, Stack, Button, IconButton } from "@chakra-ui/core"
import { TiChevronLeft, TiChevronRight } from "react-icons/ti"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleCard from "../components/article-card"

const ArticleList = ({ data, pageContext }) => {
  const articleEdges = data.allMicrocmsArticle.edges
  const { currentPage, numPages } = pageContext

  return (
    <Layout>
      <SEO title={`記事一覧 `} />
      <Heading as="h2" size="md" mt={4}>
        記事一覧 ({currentPage}/{numPages}ページ)
      </Heading>
      {articleEdges.map((edge, i) => (
        <ArticleCard key={i} edge={edge} />
      ))}
      <Stack isInline justifyContent="center">
        <Link to={`/articles/${currentPage - 1}`}>
          <IconButton icon={TiChevronLeft} isDisabled={currentPage === 1} />
        </Link>
        <Button variant="outline">{currentPage}</Button>
        <Link to={`/articles/${currentPage + 1}`}>
          <IconButton
            icon={TiChevronRight}
            isDisabled={currentPage === numPages}
          />
        </Link>
      </Stack>
    </Layout>
  )
}

export default ArticleList

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    allMicrocmsArticle(
      sort: { fields: createdAt, order: DESC }
      limit: $limit
      skip: $skip
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
