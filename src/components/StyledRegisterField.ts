import styled from "styled-components";

export const StyledRegisterField = styled.section`
  display: flex;
  justify-content: space-evenly;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
`;

export const StyledAtuationContent = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 44px 67px;

  & div:first-child {
    display: flex;
    align-items: center;
  }

  & h2 {
    font-size: ${({ theme }) => theme.font.gutter.large}px;
    font-weight: 500;
    padding-left: 10px;
    margin: 0;
    & span {
      color: ${({ theme }) => theme.colors.pink};
      padding-left: 6px;
    }
  }

  & Button {
    margin-bottom: 0;
    margin-top: 46px;
  }
`;

export const StyledAtuationForm = styled.div`
  & label {
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.size.default}px;
    display: block;
    margin-bottom: 10px;
    margin-top: 20px;
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
`;

export const StyledNewAtuationCamp = styled.div`
  text-align: center;
  & h4 {
    font-family: ${({ theme }) => theme.fonts.fontPoppins};
    font-size: ${({ theme }) => theme.font.size.default}px;
    font-weight: 600;
    margin: 0;
  }

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.pink};
  }
`;
