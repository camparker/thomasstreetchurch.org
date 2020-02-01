import React from "react"
import Theme from "./theme"
import styled from "styled-components"
import { Link } from "gatsby"
import TSCLogo from "./tsc-logo"

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.lightPurple};
`

const Header = () => (
  <Theme>
    <Container>
      <header>
        <div>
          <h1>Testing Header</h1>
        </div>
      </header>
    </Container>
  </Theme>
)

export default Header
