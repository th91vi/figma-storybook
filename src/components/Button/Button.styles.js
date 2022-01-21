import styled, { css } from "styled-components";

const modifiers = {
  primary: (theme) => css`
    color: ${theme.color.functional.soft.lightest};
    background-color: ${theme.color.brand.primary.medium};
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    border-width: ${theme.border.width.thin};
    border-color: transparent;

    &:hover {
      color: ${theme.color.functional.soft.medium};
      background-color: ${theme.color.brand.primary.lightest};
      box-shadow: none;
    }

    &:active {
      color: ${theme.color.brand.primary.medium};
      background-color: ${theme.color.functional.soft.lightest};
      border-color: ${theme.color.brand.primary.medium};
      box-shadow: none;
    }

    &:disabled {
      color: ${theme.color.functional.soft.darkest};
      background-color: ${theme.color.functional.soft.medium};
      box-shadow: none;
      cursor: not-allowed;
    }
  `,
  icon: (theme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 16px;

      span + & {
        margin-left: ${theme.color.functional.soft.medium};
      }
    }
  `,
};

export const Button = styled.button.attrs({ type: "button" })`
  ${({ theme, variant, icon }) => css`
    display: block;
    min-width: 120px;
    padding: 16px 32px;
    border-radius: ${theme.border.radius.sm};
    font-size: ${theme.font.size.xs};
    font-weight: ${theme.font.weight.bold};
    font-family: ${theme.font.family.secondary};
    cursor: pointer;
    transition: all 0.15s;

    ${!!variant && modifiers[variant](theme)};
    ${!!icon && modifiers.icon(theme)};
  `}
`;
