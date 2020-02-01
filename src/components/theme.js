import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    lightYellow: "#F8EDC0",
    eggshellWhite: "#F9F9F9",
    darkPurple: "#8F24C0",
    midPurple: "#C67FE6",
    lightPurple: "#CAADDD",
  },
  fonts: ["baskerville-bold", "baskerville-italic"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
