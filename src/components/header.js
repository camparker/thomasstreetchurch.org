import React from "react"
import Theme from "./theme"
import styled from "styled-components"
import { Link } from "gatsby"
import TSCLogo from "./tsc-logo"

const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${props => props.theme.colors.midPurple};
  color: white;
`
const NavbarLogo = styled.div`
  width: 125px;
`

const Header = ({ data }) => (
  <Theme>
    <Container>
      <header>
        <Link to="/">
          <NavbarLogo>
            <TSCLogo />
          </NavbarLogo>
        </Link>

        <div>
          <h1>Thomas Street Church Of Christ</h1>
        </div>
      </header>
    </Container>
  </Theme>
)

export default Header
