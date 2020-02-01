import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"
import "normalize.css"
import "./layout.css"

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

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
