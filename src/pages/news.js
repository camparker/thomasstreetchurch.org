import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <p>{data.markdownRemark.frontmatter.subtitle}</p>
    <p>{data.markdownRemark.frontmatter.date}</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { slug: { eq: "index-page" } }) {
      frontmatter {
        title
        slug
        subtitle
        date
        description
      }
      html
    }
  }
`
