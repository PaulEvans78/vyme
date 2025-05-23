import Hair from "../assets/Hair.mp4";
import styled from "styled-components";

const StyledGridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 800px;
  background-color: var(--background-color-black);

  @media (max-width: 960px) {
      height: 2000px;
      grid-template-columns: 100%;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
  "carousel" 
  "wrapper";
  }

   @media (max-width: 767px) {
  height: 1600px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`;

const StyledVideo = styled.video`
  width: 100%;
  object-fit: cover;
`;

const StyledContents = styled.div`
  padding: 2em;
  padding-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: left;
  z-index: 2;

    @media (max-width: 960px) {
       justify-content: center;
  }

  @media (max-width: 767px) {
 padding-left: 1em;
 justify-content: flex-end;
  }

  @media screen and (max-width: 478px) {
    padding-left: 0.5em;
  }
`;

const StyledTitle = styled.div`
  position: absolute;
  top: 0;
  margin-top: 6em;
  margin-left: 2em;
  h2 span {
    color: #e8bc8d;
  }
`;

const StyledCopyWrapper = styled.div`
  padding-top: 3em;
  padding-bottom: 3em;

`;

const StyledCopy = styled.div`
  position: relative;
  max-width: 90%;
  margin-left: 2em;
`;

const TwoSplitCard = () => {
  return (
    <StyledGridContainer>
      <StyledWrapper>
        <StyledContents>
          <StyledTitle>
            <h2>
              What You <span>Gain</span>
            </h2>
          </StyledTitle>
          <StyledCopy>
            <StyledCopyWrapper>
              <p>
                As a customer, you’re in control, tell us about your brand's
                direction, the model’s look, environment, and body type, no need
                to ship product samples or plan shoots for weeks. With
                AI-generated images, you get creative freedom, short lead times,
                and complete flexibility. 
              </p>
            </StyledCopyWrapper>

            <StyledCopyWrapper>
              <ul>
                <li>Lower visual production costs</li>
                <li>Faster time to market</li>
                <li>
                  Higher conversion rates through relevant, personalised visuals
                </li>
                <li>Improved ad performance with precisely targeted imagery</li>
              </ul>
            </StyledCopyWrapper>
          </StyledCopy>
        </StyledContents>
      </StyledWrapper>

      <StyledWrapper>
        <StyledVideo src={Hair} autoPlay loop muted playsInline />
      </StyledWrapper>
    </StyledGridContainer>
  );
};

export default TwoSplitCard;
