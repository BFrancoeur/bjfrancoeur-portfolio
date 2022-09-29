import { SocialLinks, SocialLink, SocialIcon } from "./SocialLinks.styles";

const SocialLinkSection = () => {
  <SocialLinks>
    <SocialLink href="https://www.linkedin.com/in/brianfrancoeur/">
      <SocialIcon className="fa fa-linkedin" />
    </SocialLink>

    <SocialLink href="https://twitter.com/bjfrancoeur">
      <SocialIcon className="fa fa-twitter" />
    </SocialLink>

    <SocialLink href="https://github.com/BFrancoeur">
      <SocialIcon className="fa fa-github" />
    </SocialLink>
  </SocialLinks>;
};

export default SocialLinkSection;
