import React from "react"
import { graphql, Link } from "gatsby"

import { Box, Button, Heading, Stack } from "@chakra-ui/core"
import { TiChevronRight } from "react-icons/ti"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ArticleCard from "../components/article-card"
import Tag from "../components/tag"

const IndexPage = ({ data }) => {
  const articleEdges = data.allMicrocmsArticle.edges
  const foodGenreEdges = data.allMicrocmsFoodGenre.edges
  const priceEdges = data.allMicrocmsPrice.edges
  const cityEdges = data.allMicrocmsCity.edges
  const stationEdges = data.allMicrocmsStation.edges

  return (
    <Layout>
      <SEO title="トップ" />
      {/* <p>Uber Eatsで注文できる個人経営のお店を紹介するサイトです</p> */}
      <Heading as="h2" size="md" mt={4}>
        新着記事
      </Heading>
      {articleEdges.map((edge, i) => (
        <ArticleCard key={i} edge={edge} />
      ))}
      <Box d="flex" justifyContent="center">
        <Link to="/articles/1">
          <Button variantColor="purple" leftIcon={TiChevronRight}>
            もっと見る
          </Button>
        </Link>
      </Box>

      <Heading as="h2" size="md" mt={4}>
        料理ジャンル
      </Heading>
      <Stack isInline space={2} m={4} flexWrap="wrap">
        {foodGenreEdges.map((edge, i) => (
          <Tag key={i} type="food-genre" mb={2}>
            {edge.node.name}
          </Tag>
        ))}
      </Stack>

      <Heading as="h2" size="md" mt={4}>
        価格帯
      </Heading>
      <Stack isInline space={2} m={4} flexWrap="wrap">
        {priceEdges.map((edge, i) => (
          <Tag key={i} type="price" mb={2}>
            {edge.node.name}
          </Tag>
        ))}
      </Stack>

      <Heading as="h2" size="md" mt={4}>
        市区町村
      </Heading>
      <Stack isInline space={2} m={4} flexWrap="wrap">
        {cityEdges.map((edge, i) => (
          <Tag key={i} type="city" mb={2}>
            {edge.node.name}
          </Tag>
        ))}
      </Stack>

      <Heading as="h2" size="md" mt={4}>
        駅
      </Heading>
      <Stack isInline space={2} m={4} flexWrap="wrap">
        {stationEdges.map((edge, i) => (
          <Tag key={i} type="station" mb={2}>
            {edge.node.name}
          </Tag>
        ))}
      </Stack>
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
    allMicrocmsArticle(sort: { fields: createdAt, order: DESC }, limit: 5) {
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
    allMicrocmsFoodGenre {
      edges {
        node {
          name
        }
      }
    }
    allMicrocmsPrice {
      edges {
        node {
          name
        }
      }
    }
    allMicrocmsCity {
      edges {
        node {
          name
        }
      }
    }
    allMicrocmsStation {
      edges {
        node {
          name
        }
      }
    }
  }
`

export default IndexPage
