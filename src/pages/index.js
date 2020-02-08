import React from "react"
import { graphql } from "gatsby"
import Theme from "../components/theme"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexImage from "../components/index-image"

const Jumbotron = styled.div`
  position: relative;
  text-align: center;
  color: ${props => props.theme.colors.eggshellWhite};
`

const JumbotronImage = styled.div``

const JumbotronText = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    top: 50%;
  }
`
const Title = styled.p`
  border-bottom: 2px solid ${props => props.theme.colors.lightYellow};
  font-size: ${props => props.theme.fontSizes.medium};
`

const Subtitle = styled.p`
  display: inline-block;
  margin: 0;
  border-bottom: 2px solid ${props => props.theme.colors.lightYellow};
  font-size: ${props => props.theme.fontSizes.small};
`

const IndexPage = ({ data }) => (
  <Theme>
    <Layout>
      <SEO title="Home" />
      <Jumbotron>
        <JumbotronImage>
          <IndexImage />
        </JumbotronImage>
        <JumbotronText>
          <Title>
            <p>{data.markdownRemark.frontmatter.title}</p>
          </Title>
          <Subtitle>
            <p>{data.markdownRemark.frontmatter.subtitle}</p>
          </Subtitle>
        </JumbotronText>
      </Jumbotron>
    </Layout>
  </Theme>
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
