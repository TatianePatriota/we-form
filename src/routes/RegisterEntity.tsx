import styled from "styled-components";
import { BannerRegister } from "../components/BannerRegister";
import { Button } from "../components/Button";
import { StyledContentContainer } from "./Register";
import { BackIcon } from "../components/Icons";
import { Link } from "react-router-dom";

export function RegisterEntity() {
  return (
    <StyledRegisterEntity>
      <BannerRegister />
      <StyledRegisterEntityForm>
        <div>
          <Link to="/">
            <BackIcon />
          </Link>
          <h2>
            Nova<span>entidade</span>
          </h2>
        </div>
        <div>
          <form action="">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="selection">Campo de atuação</label>
            <select id="selection" name="selection">
              <option
                value=" Selecione uma opção"
                selected
                disabled
                id="selection"
              >
                Selecione uma opção
              </option>
              <option value="Cachorros">Cachorros</option>
              <option value="Gatos">Gatos</option>
              <option value="Grande Porte">Grande Porte</option>
            </select>
            <label htmlFor="collection-points">Pontos de coleta</label>
            <input
              type="text"
              name="collection-points"
              id="collection-points"
            />
          </form>
        </div>
        <Link to="/registration-done">
          <Button>Cadastrar</Button>
        </Link>
      </StyledRegisterEntityForm>
    </StyledRegisterEntity>
  );
}

const StyledRegisterEntity = styled(StyledContentContainer)``;

export const StyledRegisterEntityForm = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 44px 57px;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;

  font-family: ${({ theme }) => theme.fonts.fontRoboto};

  & div:first-child {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  h2 {
    font-size: ${({ theme }) => theme.font.gutter.large}px;
    font-weight: 500;
    padding-left: 10px;
    margin: 0;
  }

  & span {
    color: ${({ theme }) => theme.colors.pink};
    padding-left: 6px;
  }

  & label {
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.size.default}px;
    display: block;
    margin-bottom: 10px;
  }

  & input,
  select {
    width: 100%;
    padding: 15px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.white};
    margin-bottom: 10px;

    border: 1px solid rgba(0, 0, 0, 0.15);
    cursor: pointer;
    outline: none;
  }

  & Button {
    margin-bottom: 0;
    margin-top: 40px;
  }
`;
