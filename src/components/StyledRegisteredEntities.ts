import styled from "styled-components";

export const StyledOrganizations = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  h3 {
    font-family: ${({ theme }) => theme.fonts.fontPoppins};
    font-size: ${({ theme }) => theme.font.size.large}px;
    font-weight: 500;
  }

  & Button {
    width: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.lightGreen};
    border: 1px solid ${({ theme }) => theme.colors.lightGreen};
    margin: 0;
  }
`;
export const StyledRegisteredEntities = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 44px 67px;

  & div:first-child {
    display: flex;
    align-items: center;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.fontRoboto};
    font-size: ${({ theme }) => theme.font.gutter.large}px;
    font-weight: 500;
    margin-left: 20px;
  }

  span {
    color: ${({ theme }) => theme.colors.pink};
    margin-right: 8px;
  }
`;
