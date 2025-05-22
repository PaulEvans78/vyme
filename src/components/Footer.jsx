import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const footerData = [

  {
    id: 2,
    href: "https://www.linkedin.com/company/ekmanfalck/posts/?feedView=all",
    icon: <FaLinkedin />,
    des: "LinkedIn",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  
];

const StyledFooter = styled.footer`
  background-color: var(--main-hero-backgroundcolor);
  max-width: 100vw;
  min-width: 100vw;
  z-index: 98;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 2em;
  padding-bottom: 2em;

  line-height: 24px;
  color: var(--main-font-color);
  background-color: #000000a9;
`;

const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 0em;
  text-align: center;
`;

const StyledMailLink = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  margin-bottom: -0.5em;

  &:hover {
    color: var(--main-button-hover-color);
    text-decoration: underline;
  }

  @media screen and (max-width: 960px) {
    &:hover {
      color: inherit;
    }
  }
`;

const StyledTelLink = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: 300;

  &:hover {
    color: var(--main-button-hover-color);
    text-decoration: underline;
  }

  @media screen and (max-width: 960px) {
    &:hover {
      color: inherit;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  justify-items: center;
  padding-top: 0em;
`;

const StyledIcon = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 2em 0em 2em;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const IconDes = styled.p`
  display: flex;
  flex-direction: column;
  align-content: center;
  font-size: 12px;
  line-height: 18px;
  color: var(--main-font-color);
  text-align: center;
  margin-top: 0.5em;

  @media screen and (max-width: 960px) {
    &:hover {
      color: inherit;
    }
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
`;

const Styledp = styled.p`
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 32px;

  @media (max-width: 768px) {
    font-weight: 400;
    -webkit-text-stroke: 0.3px;
  }
`;

const StyledpSmall = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 200;
  font-style: normal;
  line-height: 1.6;
  color: var(--main-font-color);
  margin: 0em 0em 1em 0em;
`;

const StyledMicrop = styled.p`
  font-size: 12px;
  font-weight: 300;
  margin: 1px;
`;

const StyledIdent = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  margin-top: 0.75em;
  text-align: center;
`;



const Footer = React.forwardRef((props, ref) => (
  <StyledFooter ref={ref}>
      <Styledp>Let's Create Together</Styledp>
    <StyledLogoContainer>
      <Link to="/">
        <StyledIdent className="footer_logo">
           
          VYME
          
        </StyledIdent>
      </Link>
    </StyledLogoContainer>
   

    <StyledContactContainer>
     
      
      <StyledpSmall>Part of the Ekman & Falck Group</StyledpSmall>
      <StyledMailLink>
        <a href="mailto:info@ekmanfalck.se">info@ekmanfalck.se</a>
      </StyledMailLink>
      <StyledTelLink>
        <a href="tel:+46739908858">+46739908858</a>
      </StyledTelLink>
 
      <StyledMicrop>Copyright 2025.</StyledMicrop>
    </StyledContactContainer>

     <Icons />
  </StyledFooter>
));

const Icons = () => {
  return (
    <IconContainer>
      <IconContext.Provider value={{ size: "2em" }}>
        {footerData.map((Link) => (
          <StyledIcon
            href={Link.href}
            key={Link.id}
            target={Link.target}
            rel={Link.rel}
          >
            {Link.icon}

            <IconDes>{Link.des}</IconDes>
          </StyledIcon>
        ))}
      </IconContext.Provider>
    </IconContainer>
  );
};

export default Footer;
