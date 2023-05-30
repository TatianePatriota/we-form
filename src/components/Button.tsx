import styled from "styled-components";

export const Button = styled.button<{
  variant?: "primary" | "secondary";
}>`
  text-decoration: none;
  padding: 8px;
  background-color: ${({ variant, theme }) =>
    variant === "secondary" ? theme.colors.pink : theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.fontPoppins};
  text-align: center;
  border-radius: 12px;
  margin-bottom: 48px;
  font-size: ${({ theme }) => theme.font.size.large}px;
  line-height: 36px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  width: 100%;
`;
