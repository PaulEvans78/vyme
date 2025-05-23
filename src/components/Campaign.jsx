import styled from "styled-components";
import ManInSuit from "../assets/campaign.jpg"


const StyledContentsContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  height: 828px;

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

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledContents = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  z-index: 2;
  background: linear-gradient(to bottom, rgba(10, 10, 10, 0) 0%, rgba(10, 10, 10, 0.6) 150%);

  /* @media (max-width: 960px) {
    align-items: center;

    padding: 0em 0em 1em 0em;
  }

  @media (max-width: 767px) {
    aspect-ratio: 3/5;
  } */
`;

const StyledTitle = styled.div`
  margin: 0;
`;

const StyledCopy = styled.div`
position: relative;
  max-width: 60%;

  @media (max-width: 960px) {
  max-width: 90%;
  }
  
`;

const Campaign = () => {
  return (
    <StyledContentsContainer>

      <StyledImg
        src={ManInSuit}
        alt="A man with brushed back brown hair, wears a light blue suit. Standing in a fieled at sunset."
      />
      <StyledContents>
 

          <StyledTitle className="offers">
          Campaign
        </StyledTitle>
        <StyledCopy>
          <p>
            We create premium, campaign-ready visuals without the need for crews, sets, or travel. 
            Launch faster, spend smarter, without compromising on quality or vision.
          </p>
        </StyledCopy>
       
      </StyledContents>
    </StyledContentsContainer>
  );
};



export default Campaign;
