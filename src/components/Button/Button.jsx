import * as S from "./Button.styles";

export const Button = ({ children, variant = "primary", ...rest }) => (
  <S.Button variant={variant} {...rest}>
    {children}
  </S.Button>
);
