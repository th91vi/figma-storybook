import styled, { css } from "styled-components";

const modifiers = {
  primary: () => css`
    color: ${({ theme }) => theme.color.functional.soft.lightest};
    background-color: ${({ theme }) => theme.color.brand.primary.medium};
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    border-width: ${({ theme }) => theme.border.width.thin};
    border-color: transparent;

    &:hover {
      color: ${({ theme }) => theme.color.functional.soft.medium};
      background-color: ${({ theme }) => theme.color.brand.primary.lightest};
      box-shadow: none;
    }

    &:active {
      color: ${({ theme }) => theme.color.brand.primary.medium};
      background-color: ${({ theme }) => theme.color.functional.soft.lightest};
      border-color: ${({ theme }) => theme.color.brand.primary.medium};
      box-shadow: none;
    }

    &:disabled {
      color: ${({ theme }) => theme.color.functional.soft.darkest};
      background-color: ${({ theme }) => theme.color.functional.soft.medium};
      box-shadow: none;
      cursor: not-allowed;
    }
  `,
};

export const Button = styled.button.attrs({ type: "button" })`
  ${({ theme, variant }) => css`
    display: block;
    min-width: 120px;
    padding: 16px 32px;
    border-radius: ${theme.border.radius.sm};
    font-size: ${theme.font.size.xs};
    font-weight: ${theme.font.weight.bold};
    cursor: pointer;
    transition: all 0.15s;

    ${!!variant && modifiers[variant]}
  `}
`;
