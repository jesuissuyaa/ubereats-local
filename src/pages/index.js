import React from "react"
import { Link, graphql } from "gatsby"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const edges = data.allMicrocmsArticles.edges
  // console.log(edges)
  // edges.forEach(edge => {
  //   console.log(edge.node.title)
  // })

  return (
    <Layout>
      <SEO title="トップ" />
      <p>Uber Eatsで注文できる個人経営のお店を紹介するサイトです</p>
      <h1>新着記事</h1>
      {edges.map(edge => (
        <div>
          <Link to={edge.node.slug}>{edge.node.title}</Link>
        </div>
      ))}
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
    allMicrocmsArticles(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          slug
          title
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

export default IndexPage
