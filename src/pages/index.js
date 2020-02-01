import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import TSCLogo from "../components/tsc-logo"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <p>{data.markdownRemark.frontmatter.subtitle}</p>
    <p>{data.markdownRemark.frontmatter.date}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <TSCLogo />
    </div>
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
