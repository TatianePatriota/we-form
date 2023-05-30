import styled from "styled-components";
import { BannerRegister } from "../components/BannerRegister";
import {
  StyledBanner,
  StyledNewRegister,
  StyledRegister,
} from "../components/StyledRegister";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <StyledContentregister>
      <StyledBanner>
        <BannerRegister />
      </StyledBanner>
      <StyledRegister>
        <h2>
          Cadastre sua <span>entidade</span> ou acesse dados{" "}
          <span>de parceiras</span>
        </h2>
        <Link to="/register-entity">
          <Button>Cadastrar entidade</Button>
        </Link>
        <Link to="/registered-entilities">
          <Button variant="secondary">Ver entidades cadastradas</Button>
        </Link>
        <StyledNewRegister>
          <p>Sua entidade não se enquadra nos campos de atuação disponíveis?</p>
          <a href="/">Registrar novo campo de atuação</a>
        </StyledNewRegister>
      </StyledRegister>
    </StyledContentregister>
  );
}

const StyledContentregister = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  align-items: center;
  margin: 0 auto;
`;
