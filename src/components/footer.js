import React from "react"

import { Box, Text } from "@chakra-ui/core"

const Footer = ({ siteAuthor }) => {
  return (
    <footer>
      <Box bg="purple.700" p={4}>
        <Text color="white">
          © {new Date().getFullYear()} {siteAuthor}, built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Text>
      </Box>
    </footer>
  )
}

export default Footer
