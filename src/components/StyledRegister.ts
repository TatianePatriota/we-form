import styled from "styled-components";

export const StyledRegister = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 44px 57px;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;

  h2 {
    margin-top: 0;
    font-size: ${({ theme }) => theme.font.gutter.large}px;
    font-family: ${({ theme }) => theme.fonts.fontRoboto};
    font-weight: 500;
  }
  span {
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export const StyledNewRegister = styled.div`
  text-align: center;
  p {
    font-size: ${({ theme }) => theme.font.size.small}px;
    line-height: 21px;
    font-weight: 500;
  }

  a {
    font-size: ${({ theme }) => theme.font.size.default}px;
    color: ${({ theme }) => theme.colors.black};
    line-height: 27px;
    text-decoration-line: underline;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const StyledBanner = styled.div``;
