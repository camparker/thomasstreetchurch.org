import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"
import "normalize.css"

// Flexbox - for sticky footer
const Site = styled.div`
  font-family: "baskerville-bold", "baskerville-italic", serif;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`
// Flexbox - for sticky footer
const SiteContent = styled.main`
  flex: 1;
`

const Layout = ({ children }) => {
  return (
    <>
      <Site>
        <Header />
        <SiteContent>{children}</SiteContent>
        <Footer />
      </Site>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
