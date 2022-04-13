import styled from "styled-components";

export const ContainerLogin = styled.div`
  height: 100vh;
  background-color: rgb(28, 29, 31);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerForm = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  width: 380px;
  height: 582px;
  border-radius: 8px;
`;

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LoginForm = styled.input`
  width: 300px;
  height: 42px;
  border-radius: 8px;
`;