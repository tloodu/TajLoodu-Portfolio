import React from "react"

import Layout from "../components/layout"
import Home from "../components/home"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Home content={data.home.edges[0].node} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    home: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitleStart
          }
          rawMarkdownBody
        }
      }
    }
  }
`