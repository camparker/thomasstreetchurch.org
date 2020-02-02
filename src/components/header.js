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
`
const Container = styled.div`
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: ${props => props.theme.colors.midPurple};
`
const NavLogo = styled.div`
  width: 125px;

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
`
const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.5em 1.5em;
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
              <StyledLink to="#">News</StyledLink>
            </Li>
            <Li>
              <StyledLink to="#">Prayer Requests</StyledLink>
            </Li>
            <Li>
              <StyledLink to="#">Our Mission</StyledLink>
            </Li>
          </Ul>
        </Nav>
      </Container>
    </MainHeader>
  </Theme>
)

export default Header
