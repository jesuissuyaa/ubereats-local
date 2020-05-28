import React from "react"
import { Link } from "gatsby"

import { Box, Heading, Stack, Text } from "@chakra-ui/core"

const ArticleCard = ({ edge }) => {
  return (
    <Link key={edge.node.slug} to={`/${edge.node.slug}`}>
      <Box borderWidth="1px" rounded="lg" p={4} m={4}>
        <Heading as="h3" size="md">
          {edge.node.title}
        </Heading>
        <Text fontSize="xs" color="gray.600" textAlign="right">
          {edge.node.createdAt}
        </Text>
        {edge.node.description}
      </Box>
    </Link>
  )
}

export default ArticleCard
