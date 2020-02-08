import React from "react"
import { Link } from "gatsby"
import Theme from "./theme"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-solid-svg-icons"

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  font-size: 10px;
  background-color: ${props => props.theme.colors.lightPurple};
  color: ${props => props.theme.colors.darkPurple};
`
const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${props => props.theme.colors.darkPurple};

  &:hover {
    color: ${props => props.theme.colors.eggshellWhite};
  }
`

const Footer = () => (
  <Theme>
    <StyledFooter>
      <p>
        <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()} |{" "}
        <StyledLink to="/news">Thomas Street Church of Christ</StyledLink>
      </p>
    </StyledFooter>
  </Theme>
)

export default Footer
