import styled from "styled-components";

export const Button = styled.button.attrs({ type: "button" })`
  display: block;
  padding: 18px 36px;
  border: none;
  border-radius: 60px;
  background-color: ${({ theme }) => `${theme.colors.app.blueDarkest}`};
  font-size: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background-color: ${({ theme }) => `${theme.colors.app.blueMedium}`};
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  }

  &:active {
    background-color: ${({ theme }) => `${theme.colors.app.blueLightest}`};
  }

  &:disabled {
    background-color: ${({ theme }) => `${theme.colors.status.inactive}`};
    box-shadow: none;
    cursor: not-allowed;
  }
`;
