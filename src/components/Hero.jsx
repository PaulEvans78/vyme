import styled from "styled-components";

const StyledContentsContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  background-color: #00000013;
`;

const StyledContents = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: center;

  @media (max-width: 960px) {
  padding-bottom: 4em;
  }

  @media (max-width: 767px) {
 
  }
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  z-index: 2;
  padding-top: 2em;

  @media (max-width: 960px) {
  padding-top: 8em;
  }

`;

const StyledPitch = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  text-align: center;

  @media (max-width: 960px) {
  padding-left:1em;
  padding-right:1em;
  }

  @media (max-width: 767px) {
 padding-left:2em;
  padding-right:2em;
  }
`;

const StyledCopy = styled.p`
color: var(--secondary-font-color);
`;

const Hero = () => {
  return (
    <StyledContentsContainer>
      <StyledContents>
        <StyledTitle>
          <h1>VYME</h1>
        </StyledTitle>
        <StyledPitch>
          <StyledCopy className="pitch">
            Imagery designed to reflect your brand’s essence
          </StyledCopy>
        </StyledPitch>
      </StyledContents>
    </StyledContentsContainer>
  );
};

export default Hero;
