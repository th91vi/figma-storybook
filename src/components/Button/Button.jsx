import * as S from "./Button.styles";

export const Button = (props) => {
  return <S.Button {...props}>{props.children}</S.Button>;
};
