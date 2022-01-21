import * as S from "./Home.styles";
import { Button } from "./Button";
import {
  AddShoppingCart,
  AccessAlarm,
  Backpack,
  Facebook,
} from "@styled-icons/material-outlined";

export const Home = () => {
  return (
    <S.Layout>
      <S.Content>
        <S.Card>
          <S.CardHeader>Buttons</S.CardHeader>
          <S.CardBody>
            <Button>Button</Button>
            <Button disabled>Disabled</Button>
            <Button icon={<AddShoppingCart />}>Add to shopping cart</Button>
            <Button icon={<AccessAlarm />}>Alarm</Button>
            <Button icon={<Backpack />}>Back pack</Button>
            <Button icon={<Facebook />}>Share to Facebook</Button>
          </S.CardBody>
        </S.Card>
      </S.Content>
    </S.Layout>
  );
};
