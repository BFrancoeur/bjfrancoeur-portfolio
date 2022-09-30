import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  SocialLinks,
  SocialLinkItem,
  SocialLink,
} from "./SocialLinksList.styles";

const SocialLinksList = () => {
  const socialLinks = [
    {
      iconName: "LinkedIn",
      faIconName: faLinkedin,
      url: "https://www.linkedin.com/in/brianfrancoeur/",
      cssClasses: "fa-brands fa-linkedin",
      iconColor: "#fff4e5",
      iconSize: "2x",
      brand: "linkedin",
      style: "brands",
    },
    {
      name: "Github",
      faIconName: faGithub,
      url: "https://github.com/BFrancoeur",
      cssClasses: "fa-brands fa-github",
      iconColor: "#fff4e5",
      iconSize: "2x",
      brand: "github",
      style: "brands",
    },
    {
      name: "Twitter",
      faIconName: faTwitter,
      url: "https://twitter.com/bjfrancoeur",
      faCssClasses: "fa-brands fa-twitter",
      iconColor: "#fff4e5",
      iconSize: "2x",
      brand: "twitter",
      style: "brands",
    },
  ];

  return (
    <SocialLinks>
      {socialLinks.map(
        ({ faIconName, url, faCssClasses, iconColor, iconSize }, index) => {
          return (
            <SocialLinkItem key={index}>
              <SocialLink href={url}>
                <FontAwesomeIcon
                  icon={faIconName}
                  className="iconColor"
                  size="3x"
                ></FontAwesomeIcon>
              </SocialLink>
            </SocialLinkItem>
          );
        }
      )}
    </SocialLinks>
  );
};

export default SocialLinksList;
