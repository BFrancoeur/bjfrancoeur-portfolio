import {
  HeroSection,
  Overlay,
  CtaContent,
  PrimaryCtaMsg,
  SupportingCtaMsg,
  PrimaryCtaButton,
} from "./HeroSection.styles";

const Hero = () => {
  return (
    <HeroSection>
      <Overlay>
        <CtaContent>
          <PrimaryCtaMsg>Primary CTA Message</PrimaryCtaMsg>
          <SupportingCtaMsg>Supporting CTA Message</SupportingCtaMsg>
          <PrimaryCtaButton>Primary CTA Button</PrimaryCtaButton>
        </CtaContent>
      </Overlay>
    </HeroSection>
  );
};

export default Hero;
