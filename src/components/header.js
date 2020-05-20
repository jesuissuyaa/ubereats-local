import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Box, Heading, Link as ChakraLink, Stack, Text } from "@chakra-ui/core"
import { FaTwitter, FaInstagram } from "react-icons/fa"

const Header = ({ siteTitle, siteDescription }) => (
  <header>
    <Stack space={4} bg="purple.500" p={4} align="center" color="white">
      <Heading as="h1" size="lg" color="white">
        <Link to="/">{siteTitle}</Link>
      </Heading>
      <Text fontSize="xs">{siteDescription}</Text>
      <Stack isInline sp={4}>
        <ChakraLink href="https://twitter.com/ubereats_local" isExternal>
          <Box as={FaTwitter} fontSize="lg" />
        </ChakraLink>
        <ChakraLink href="https://www.instagram.com/ubereats_local/" isExternal>
          <Box as={FaInstagram} fontSize="lg" />
        </ChakraLink>
      </Stack>
    </Stack>
  </header>
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
