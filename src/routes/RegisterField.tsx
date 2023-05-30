import { BannerRegister } from "../components/BannerRegister";
import { BackIcon } from "../components/Icons";
import { Link } from "react-router-dom";
import {
  StyledAtuationContent,
  StyledAtuationForm,
  StyledNewAtuationCamp,
  StyledRegisterField,
} from "../components/StyledRegisterField";
import { Button } from "../components/Button";

export function RegisterField() {
  return (
    <StyledRegisterField>
      <BannerRegister />
      <StyledAtuationContent>
        <div>
          <Link to="/">
            <BackIcon />
          </Link>
          <h2>
            Campo de<span>atuação</span>
          </h2>
        </div>
        <StyledAtuationForm>
          <form action="">
            <label htmlFor="search">Pesquisar atuação</label>
            <select name="search" id="search">
              <option value="" selected disabled>
                Selecione uma opção
              </option>
              <option value="cachorros">Cachorros</option>
              <option value="gatos">Gatos</option>
              <option value="cachorros">Grande Porte</option>
            </select>
            <StyledNewAtuationCamp>
              <h4>ou</h4>
              <a href="">Cadastre novo campo de atuação</a>
            </StyledNewAtuationCamp>
            <div>
              <label htmlFor="operation">Campo de atuação</label>
              <input type="text" id="operation" name="operation" />
            </div>
          </form>
        </StyledAtuationForm>
        <Link to="/registration-done">
          <Button>Cadastrar</Button>
        </Link>
      </StyledAtuationContent>
    </StyledRegisterField>
  );
}
