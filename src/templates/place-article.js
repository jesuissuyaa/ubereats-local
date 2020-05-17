import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const PlaceArticle = ({ data }) => {
  const post = data.microcmsArticles
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    </Layout>
  )
}
// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `

export default PlaceArticle

// note: variables with $ are variables inside the context object for createPage
export const query = graphql`
  query($id: String!) {
    microcmsArticles(id: { eq: $id }) {
      id
      body
      title
    }
  }
`
