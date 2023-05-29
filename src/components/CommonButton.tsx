import styled from "styled-components";

type CommonButtontype = {
  text: string;
  color: "#35E6E9" | "#FF5678";
};

export function CommonButton({ text, color }: CommonButtontype) {
  return (
    <StyledCommonButton href="/" color={color}>
      {text}
    </StyledCommonButton>
  );
}

export const StyledCommonButton = styled.a<{ color: string }>`
  text-decoration: none;
  padding: 8px;
  background-color: ${(props) => props.color};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.fontPoppins};
  display: block;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 48px;
  font-size: ${({ theme }) => theme.font.size.large}px;
  line-height: 36px;
  font-weight: 500;
`;
