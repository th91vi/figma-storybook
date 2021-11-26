import React from "react";
import { Button } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => (
  <ThemeProvider theme={theme}>
    <Button>Button</Button>
  </ThemeProvider>
);
