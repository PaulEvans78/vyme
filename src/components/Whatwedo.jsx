import styled from "styled-components";
import Chevrondown from "../assets/FaChevronDown.svg";



const StyledContentsContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  padding: 4em 12em 3em 12em;
  background-color: #000000a9;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 6em 1em 3em 1em;
  }

  @media (max-width: 767px) {
    padding: 6em 0em 0.5em 0em;
  }

  @media (max-width: 548px) {
    padding: 4em 0em 0.5em 0em;
  }
`;

const StyledIntro = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.2rem;
  overflow: hidden;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
  /* padding-left: 4em;
  padding-right: 4em; */

  transform: translateX(-100%);
  animation: slideIn 1s ease-out forwards;

  @media (max-width: 960px) {
    align-items: center;
    min-height: 300px;
    padding: 0em 0em 1em 0em;
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;








const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1em;
`;

const StyledImg = styled.img`
  padding-top: 0.15em;
`;

const Hero = () => {
  return (
    <StyledContentsContainer>
      <StyledIntro>
        <p>
          We are an agency built by professionals from the fashion and advertising industries, each with over 20 years of experience across photography, film, fashion, e-commerce, and retouching. 
          At our core, we believe you shouldn’t need to become an AI expert to benefit from AI. That’s why we blend AI with high-end art direction, making image production faster, smarter, and fully brand-aligned. 
          No studio renting cost, no stylist, no travel cost, no weather days,  just bespoke model images
        </p>
        <p>
          Our Services
        </p>
        <StyledIcon>
                    <StyledImg src={Chevrondown} alt="A arrow icon for next" />
                  </StyledIcon>
      </StyledIntro>
    </StyledContentsContainer>
  );
};


export default Hero;
