import React from "react";
import { Button } from ".";
import {
  AddShoppingCart,
  AccessAlarm,
  Backpack,
  Facebook,
} from "@styled-icons/material-outlined";
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
    <Button icon={<AddShoppingCart />}>Add to shopping cart</Button>
    <hr />
    <Button icon={<AccessAlarm />}>Alarm</Button>
    <hr />
    <Button icon={<Backpack />}>Back pack</Button>
    <hr />
    <Button icon={<Facebook />}>Share to Facebook</Button>
  </ThemeProvider>
);

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/WxVFT2kaZf0LjNcAPPGG5T/storybook_components?node-id=0%3A1",
  },
};
