import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4c73f5;
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
  padding: 0.5rem;

  * + * {
    margin-left: 1rem;
  }
`;
