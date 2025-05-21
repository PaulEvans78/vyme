import styled from "styled-components";


const StyledContentsContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  width: 100%;

  /* @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 767px) {
    padding: 6em 0em 0.5em 0em;
  }

  @media (max-width: 548px) {
    padding: 4em 0em 0.5em 0em;
  } */
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

  /* transform: translateX(-100%);
  animation: slideIn 1s ease-out forwards; */

  /* @media (max-width: 960px) {
    align-items: center;

    padding: 0em 0em 1em 0em;
  }

  @media (max-width: 767px) {
    aspect-ratio: 3/5;
  } */
`;

const StyledTitle = styled.div`
  /* position: absolute;
  top: 35%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  z-index: 2;
  padding-top: 3em;
`;

const StyledPitch = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* min-height: 400px; */
  /* font-size: 1.2rem; */
  overflow: hidden;
  text-align: center;
  padding-top: 100px;

  /* transform: translateX(-100%);
  animation: slideIn 1s ease-out forwards; */

  /* @media (max-width: 960px) {
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
  } */
`;

const StyledCopy = styled.p``;



// const StyledOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(
//     to bottom,
//     rgba(0, 0, 0, 0.4),
//     rgba(0, 0, 0, 0.2)
//   );
//   z-index: 1;
// `;

const Hero = () => {
  return (
    <StyledContentsContainer>
      <StyledContents>
 

        <StyledTitle className="pitch">
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
