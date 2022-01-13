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
    <hr />
    <Button disabled>Disabled</Button>
    <hr />
    <Button hasIcon>With icon</Button>
  </ThemeProvider>
);

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/WxVFT2kaZf0LjNcAPPGG5T/storybook_components?node-id=0%3A1",
  },
};
