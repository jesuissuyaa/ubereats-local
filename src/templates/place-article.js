import React from "react"
import { graphql } from "gatsby"
import {
  LineShareButton,
  LineIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share"

import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Link as ChakraLink,
  Icon,
} from "@chakra-ui/core"
import { FaYenSign, FaUtensils } from "react-icons/fa"
import { TiLocation } from "react-icons/ti"
import { MdTrain } from "react-icons/md"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Tag from "../components/tag"

import "../components/twemoji.css"
import "./place-article.css"

const PlaceArticle = ({ data }) => {
  const post = data.microcmsArticle
  const url = `${data.site.siteMetadata.url}/${post.slug}`
  console.log(post.body)

  return (
    <Layout>
      <SEO title={post.title} description={post.description} />
      <Stack>
        <Heading as="h1" size="lg">
          {post.title}
        </Heading>

        <Text>{post.description}</Text>

        <Stack my={8}>
          <Stack isInline>
            <Box as={FaUtensils} minWidth="16px" />
            <Stack isInline flexWrap="wrap">
              {post.food_genres.map((item, i) => (
                <Tag key={i} type="food-genre" mr={2} mb={2}>
                  {item.name}
                </Tag>
              ))}
            </Stack>
          </Stack>
          <Stack isInline>
            <Box as={FaYenSign} d="flex" />
            <Tag type="price" mb={2}>
              {post.price.name}
            </Tag>
          </Stack>
          <Stack isInline>
            <Box as={TiLocation} flexShrink={-1} />
            <Tag type="city" mb={2}>
              {post.city.name}
            </Tag>
          </Stack>
          <Stack isInline>
            <Box as={MdTrain} />
            <Stack isInline>
              {post.stations.map((item, i) => (
                <Tag key={i} type="station" mb={2}>
                  {item.name}
                </Tag>
              ))}
            </Stack>
          </Stack>
        </Stack>

        <Box>
          <div
            className="post"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </Box>

        <Box m={8}>
          <ChakraLink href={post.ue_link} isExternal>
            <Button variantColor="green" width="100%">
              Uber Eatsでの注文はここから
              <Icon name="external-link" mr="2px" />
            </Button>
          </ChakraLink>
        </Box>

        <Stack isInline mt={8}>
          <Box>
            <TwitterShareButton url={url}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
          </Box>
          <Box>
            <LineShareButton url={url}>
              <LineIcon size={32} round={true} />
            </LineShareButton>
          </Box>
          <Box>
            <FacebookShareButton url={url}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
          </Box>
        </Stack>
      </Stack>
    </Layout>
  )
}

export default PlaceArticle

// note: variables with $ are variables inside the context object for createPage
export const query = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        url
      }
    }
    microcmsArticle(id: { eq: $id }) {
      id
      body
      title
      description
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
      ue_link
      owner_link
      slug
    }
  }
`
