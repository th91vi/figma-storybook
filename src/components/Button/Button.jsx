import * as S from "./Button.styles";

export const Button = ({
  children,
  variant = "primary",
  icon = false,
  ...props
}) => (
  <S.Button variant={variant} icon={icon} {...props}>
    {!!children && <span>{children}</span>}
    {!!icon && icon}
  </S.Button>
);
