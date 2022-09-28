import {
  AboutMe,
  AboutMeLeft,
  AboutMeTitle,
  AboutMeRole,
  AboutMeDivider,
} from "./AboutMe.styles";

const AboutMeSection = () => {
  return (
    <AboutMe>
      <AboutMeLeft>
        <AboutMeTitle>About Me</AboutMeTitle>
        <AboutMeRole>I'm a Web Developer</AboutMeRole>
        <AboutMeDivider />
      </AboutMeLeft>

      <div className="col col-right">
        <h2>Right-Hand Column</h2>
      </div>
    </AboutMe>
  );
};

export default AboutMeSection;
