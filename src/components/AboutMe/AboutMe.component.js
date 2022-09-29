import {
  AboutMe,
  AboutMeLeft,
  AboutMeTitle,
  AboutMeRole,
  AboutMeOldRole,
  AboutMeNewRole,
  AboutMeDivider,
  AboutMeRight,
  AboutMeParagraph,
  AboutMeParaLead,
  AboutMeEm,
} from "./AboutMe.styles";

import SocialLinkSection from "../SocialLinks/SocialLinks.component";

const AboutMeSection = () => {
  return (
    <AboutMe>
      <AboutMeLeft>
        <AboutMeTitle>About Me</AboutMeTitle>
        <AboutMeRole>
          <AboutMeOldRole>Failed Entrepreneur</AboutMeOldRole> <br />
          Turned <AboutMeNewRole>Web Developer</AboutMeNewRole>
        </AboutMeRole>
        <AboutMeDivider />
      </AboutMeLeft>

      <AboutMeRight>
        <AboutMeParagraph>
          <AboutMeParaLead>
            Failure is a lens that provides clarity.{" "}
          </AboutMeParaLead>
          I thought I was someone who could do a hundred things and wear a dozen
          hats every day, but it turns out that I can't. It's just not me. I
          love to focus on one thing and get it right. I'm a craftsman who loves
          to solve problems with code. I'm a pit bull who won't let go of a
          problem until I've solved it. If I were to give my professional
          persona a name, it would be Pittman. Weird, I know.
        </AboutMeParagraph>

        <AboutMeParagraph>
          <AboutMeParaLead>
            Web Development is so much more than merely writing code.{" "}
          </AboutMeParaLead>
          It's kind of like the composition of music. Modules are movements and
          the front end is the performance. The many different bits of software
          and scripts that run in the background are the musicians in the
          orchestra. It's no coincidence that Composer is a popular dependency
          manager for PHP, the scripting language that runs nearly all of the
          websites in the world.
        </AboutMeParagraph>
        <AboutMeParagraph>
          <AboutMeParaLead>
            To create great work, you need to start with a great design system.{" "}
          </AboutMeParaLead>
          Sadly, this is almost never the case with web development. Too often,
          websites and applications are created ad-hoc. After working on
          hundreds of these kinds of websites (many of them use WordPress), I
          decided to create a design and development system of my own using
          React. My inspiration for this is from Brad Frost and his Atomic
          Design philosophy. Finally, something that makes sense! You may think,{" "}
          <AboutMeEm>Wait -- aren't design systems for designers? </AboutMeEm>{" "}
          Well, yes they are.While building a design system in Figma, I had an
          epiphany -- this is exactly what we need in web development! We need a
          development system that parallels the design system. In fact, it
          <AboutMeParaLead> incorporates</AboutMeParaLead> the design system
          directly into the building of websites and applications. ReactJS is a
          perfect fit for this approach. It's modular and readily lends itself
          to this exact approach. This inspired me to begin work on a React
          library of components based on Atomic Design and React's Styled
          Components. This project is in its infancy, and I'm working out how to
          define each component and, ultimately, how to implement a design
          system using CSS/SASS to make the fundamental design changes like
          color scheme and typography a matter of updating a handful of CSS
          variables.
        </AboutMeParagraph>

        <p>Follow Me</p>
        <SocialLinkSection />
      </AboutMeRight>
    </AboutMe>
  );
};

export default AboutMeSection;
