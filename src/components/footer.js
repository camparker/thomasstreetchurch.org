import React from "react"
import { Link } from "gatsby"
import Theme from "./theme"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  font-size: 10px;
  background-color: ${props => props.theme.colors.midPurple};
  color: ${props => props.theme.colors.eggshellWhite};
`
const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${props => props.theme.colors.eggshellWhite};

  &:hover {
    color: ${props => props.theme.colors.darkPurple};
  }
`

const Footer = () => (
  <Theme>
    <StyledFooter>
      <p>
        Copyright {new Date().getFullYear()} |{" "}
        <StyledLink to="/">Thomas Street Church of Christ</StyledLink>
      </p>
    </StyledFooter>
  </Theme>
)

export default Footer
