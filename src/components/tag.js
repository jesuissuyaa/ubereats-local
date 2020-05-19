import React from "react"
import { Link } from "gatsby"

import { Box, Tag as ChakraTag } from "@chakra-ui/core"

// props other than 'type' & 'name' should be css props to pass to Boxs
const Tag = ({ type, children, ...rest }) => {
  return (
    <Box {...rest}>
      <Link to={`/${type}/${children}`}>
        <ChakraTag size="sm">{children}</ChakraTag>
      </Link>
    </Box>
  )
}

export default Tag
