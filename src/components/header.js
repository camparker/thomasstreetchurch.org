import React from "react"
import Theme from "./theme"
import styled from "styled-components"
import { Link } from "gatsby"
import TSCLogo from "./tsc-logo"

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  border-bottom: 4px solid ${props => props.theme.colors.lightYellow};
`
const Container = styled.div`
  width: 100%;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: ${props => props.theme.colors.midPurple};
`
const NavLogo = styled.div`
  width: 150px;

  @media (min-width: 768px) {
    margin-right: auto;
  }
`
const Nav = styled.nav`
  margin: 1em 0 0.5em;
  text-align: center;
  display: inline;
  display: inline-block;
  padding: 0.5em 1.5em;
`
const Ul = styled.ul`
  margin: 1em 0 0.5em;
  text-align: center;
`
const Li = styled.li`
  display: inline;

  @media (max-width: 768px) {
    display: block;
  }
`
const StyledLink = styled(Link)`
  display: inline-block;
  margin: 0.5em;
  padding: 0.5em 1.5em;
  text-decoration: none;
  border-bottom: 2px solid ${props => props.theme.colors.lightYellow};
  color: ${props => props.theme.colors.eggshellWhite};
  font-size: ${props => props.theme.fontSizes.small};

  &:hover {
    background-color: ${props => props.theme.colors.eggshellWhite};
    color: ${props => props.theme.colors.midPurple};
  }
`
const Header = () => (
  <Theme>
    <MainHeader>
      <Container>
        <NavLogo>
          <Link to="/">
            <TSCLogo />
          </Link>
        </NavLogo>
        <Nav>
          <Ul>
            <Li>
              <StyledLink to="/news">News</StyledLink>
            </Li>
            <Li>
              <StyledLink to="/prayer">Prayer Requests</StyledLink>
            </Li>
            <Li>
              <StyledLink to="/mission">Our Mission</StyledLink>
            </Li>
          </Ul>
        </Nav>
      </Container>
    </MainHeader>
  </Theme>
)

export default Header
