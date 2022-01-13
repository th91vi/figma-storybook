import * as S from "./Button.styles";

export const Button = ({
  children,
  variant = "primary",
  icon = false,
  ...rest
}) => (
  <S.Button variant={variant} icon={icon} {...rest}>
    {children}
  </S.Button>
);
