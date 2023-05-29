import { StyledBannerRegister } from "./StyledBannerRegister";
import banner from "../assets/images/image1.png";
import { TitleWeForm } from "./TitleWeForm";

export function BannerRegister() {
  return (
    <StyledBannerRegister>
      <img src={banner} alt="Mulher com cachorro" />
      <TitleWeForm />
    </StyledBannerRegister>
  );
}
