import React from "react"
import { Link } from "gatsby"
import Theme from "./theme"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  font-size: 10px;
  border-top: 2px solid ${props => props.theme.colors.lightYellow};
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

const HiddenLink = styled.a`
  color: ${props => props.theme.colors.midPurple};

  &:hover {
    color: ${props => props.theme.colors.eggshellWhite};
  }
`

const Footer = () => (
  <Theme>
    <StyledFooter>
      <p>
        Copyright {new Date().getFullYear()} |{" "}
        <StyledLink to="/">Thomas Street Church of Christ</StyledLink> |{" "}
        <HiddenLink href="/admin/">Admin</HiddenLink>
      </p>
    </StyledFooter>
  </Theme>
)

export default Footer
