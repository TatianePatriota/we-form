import styled from "styled-components";
import { BannerRegister } from "./BannerRegister";
import {
  StyledBanner,
  StyledNewRegister,
  StyledRegister,
} from "./StyledRegister";
import { CommonButton } from "./CommonButton";

type RegisterType = {
  text: string;
  textLink: string;
};

export function Register({ text, textLink }: RegisterType) {
  return (
    <StyledContentregister>
      <StyledBanner>
        <BannerRegister />
      </StyledBanner>

      <StyledRegister>
        <h2>
          Cadastre sua <span>entidade</span> ou acesse dados
          <span>de parceiras</span>{" "}
        </h2>
        <CommonButton text="Cadastrar entidade" color="#35E6E9" />
        <CommonButton text="Ver entidades cadastradas" color="#FF5678" />
        <StyledNewRegister>
          <p>{text}</p>
          <a href="/">{textLink}</a>
        </StyledNewRegister>
      </StyledRegister>
    </StyledContentregister>
  );
}

const StyledContentregister = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 200px;
`;
