import styled from "styled-components";

export const StyledTitleWeForm = styled.div`
  line-height: 75px;
  text-align: center;
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
