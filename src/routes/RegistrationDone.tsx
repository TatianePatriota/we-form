import styled from "styled-components";
import { TitleWeForm } from "../components/TitleWeForm";

export function RegistrationDone() {
  return (
    <StyledRegistrationDone>
      <TitleWeForm />
      <h2>Cadastro Realizado com sucesso!</h2>
    </StyledRegistrationDone>
  );
}

const StyledRegistrationDone = styled.div`
  font-family: ${({ theme }) => theme.fonts.fontPoppins};
  font-size: ${({ theme }) => theme.font.size.default}px;
  font-weight: 600;
  text-align: center;
  margin-top: 150px;
`;
