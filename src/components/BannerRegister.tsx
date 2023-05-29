import { StyledBannerRegister } from "./StyledBannerRegister";
import banner from "../assets/images/image1.png";

export function BannerRegister() {
  return (
    <StyledBannerRegister>
      <img src={banner} alt="Mulher com cachorro" />
      <h1>
        <span>We</span>Form
      </h1>
    </StyledBannerRegister>
  );
}
