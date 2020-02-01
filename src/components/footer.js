import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Theme from "./theme"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.colors.lightPurple};
`
const Footer = () => (
  <Theme>
    <StyledFooter>
      <h1>Testing Footer</h1>
    </StyledFooter>
  </Theme>
)

export default Footer
