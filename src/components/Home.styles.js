import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => `${theme.color.brand.secondary.dark}`};
`;

export const Content = styled.main`
  width: 800px;
  min-height: 500px;
  padding: 1rem;
  border-radius: 5px;
  background-color: white;
`;

export const Card = styled.div``;

export const CardHeader = styled.h2``;

export const CardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${({ theme }) => `${theme.spacings.xxs}`};
  padding: 0.5rem;

  * + * {
    margin-left: 1rem;
  }
`;
