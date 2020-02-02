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
      <h1>Thomas Street Church Of Christ</h1>
    </StyledFooter>
  </Theme>
)

export default Footer
