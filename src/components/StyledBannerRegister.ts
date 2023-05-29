import styled from "styled-components";

export const StyledBannerRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 75px;
  h1 {
    font-family: ${({ theme }) => theme.fonts.fontRoboto};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.font.gutter.big}px;
    font-weight: 500;
  }

  span {
    color: ${({ theme }) => theme.colors.pink};
    padding-right: 10px;
  }
`;
