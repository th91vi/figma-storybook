import * as S from "./Home.styles";
import { Button } from "./Button";

export const Home = () => {
  return (
    <S.Layout>
      <S.Content>
        <S.Card>
          <S.CardHeader>Buttons</S.CardHeader>
          <S.CardBody>
            <Button>Button</Button>
            <Button disabled>Disabled</Button>
            <Button icon="#">With icon</Button>
          </S.CardBody>
        </S.Card>
      </S.Content>
    </S.Layout>
  );
};
