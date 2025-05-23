import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Track1 from "../assets/track1.jpg";
import Track2 from "../assets/track2.jpg";
import Track3 from "../assets/track3.mp4";
import Flat from "../assets/track_flat.png";
import styled from "styled-components";

const StyledGridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "wrapper carousel";
  width: 100%;
  height: 800px;
  height: 828px;
  background-color: var(--background-color-black);

  @media (max-width: 960px) {
      height: 2000px;
      grid-template-columns: 100%;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
  "wrapper" 
  "carousel";
  }

  @media (max-width: 767px) {
  height: 1600px;
  }
`;

const StyledWrapper = styled.div`
  grid-area: wrapper;
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const StyledCarouselWrapper = styled.div`
  grid-area: carousel;
  position: relative;
  top: 0;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
   background-color: #F4F3F0;
`;

const StyledContents = styled.div`
  width: 100%;
  padding: 2em;
  padding-bottom: 0em;
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
    justify-content: flex-end;
    padding: 0.5em;
    padding-bottom: 2em;
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

const StyledCopy = styled.div`
  position: relative;
  max-width: 100%;
  margin-left: 2em;
  margin-bottom: 2em;

  @media (max-width: 960px) {
    margin-top: 4em;
       margin-bottom: 0em;
  }

  @media (max-width: 767px) {
 
  }
`;

const StyledStepsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`;

const StyledStepNumber = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 2rem;
`;

const StyledStepsCopy = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 2em;
`;

const StyledCarouselContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFirstItem = styled.div`
  width: 100%;
  padding: 6em;

  @media screen and (max-width: 767px) {
    padding: 2em;
  }

  @media screen and (max-width: 478px) {
     padding: 6em;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;

  /* @media screen and (max-width: 1280px) {
    width: 250%;
  }

  @media screen and (max-width: 767px) {
    width: 320%;
  } */
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  /* @media screen and (max-width: 1280px) {
    width: 250%;
  }

  @media screen and (max-width: 767px) {
    width: 320%;
  } */
`;

const StyledCarousel = styled(Carousel)`
  height: 100%;

  .react-multi-carousel-list {
    margin: 0 !important;
    padding: 0 !important;
    height: 100%;
  }

  .react-multi-carousel-track {
    margin: 0 !important;
    padding: 0 !important;
    height: 100%;
  }

  .react-multi-carousel-item {
    margin: 0 !important;
    padding: 0 !important;
    height: 100%;
  }
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const TwoSplitCard = () => {
  return (
    <StyledGridContainer>
      <StyledWrapper>
        <StyledContents>
          <StyledTitle>
            <h2>
              How it <span>Works</span>
            </h2>
          </StyledTitle>
          <StyledCopy>
            <StyledStepsContainer>
              <StyledStepNumber>1</StyledStepNumber>
              <StyledStepsCopy>
                <p className="sub_title">Creative Kickoff</p>
                <p className="p_small">
                  We start with a collaborative session to align on your brand’s
                  visual language, creative direction, and desired aesthetic.
                </p>
              </StyledStepsCopy>
            </StyledStepsContainer>

            <StyledStepsContainer>
              <StyledStepNumber>2</StyledStepNumber>
              <StyledStepsCopy>
                <p className="sub_title">Product Upload</p>
                <p className="p_small">
                  Send us your product images, mannequins and/or flats. We
                  handle the rest.
                </p>
              </StyledStepsCopy>
            </StyledStepsContainer>

            <StyledStepsContainer>
              <StyledStepNumber>3</StyledStepNumber>
              <StyledStepsCopy>
                <p className="sub_title">AI Image Creation</p>
                <p className="p_small">
                  We generate high-fidelity visuals using state-of-the-art AI,
                  ensuring exceptional product accuracy and editorial quality.
                </p>
              </StyledStepsCopy>
            </StyledStepsContainer>

            <StyledStepsContainer>
              <StyledStepNumber>4</StyledStepNumber>
              <StyledStepsCopy>
                <p className="sub_title">Delivery, Ready to Publish</p>
                <p className="p_small">
                  You receive final images and videos, tailored to your formats,
                  ready for campaigns, e-commerce, or socials.
                </p>
              </StyledStepsCopy>
            </StyledStepsContainer>
          </StyledCopy>
        </StyledContents>
      </StyledWrapper>

      <StyledCarouselWrapper>
        <StyledCarousel responsive={responsive} infinite autoPlay arrows>
          <StyledFirstItem>
            <StyledCarouselContent>
              <StyledImg src={Flat} alt="Flat" />
            </StyledCarouselContent>
          </StyledFirstItem>

          <StyledCarouselContent>
            <StyledImg src={Track1} alt="Track1" />
          </StyledCarouselContent>

          <StyledCarouselContent>
            <StyledImg src={Track2} alt="Track2" />
          </StyledCarouselContent>

          <StyledCarouselContent>
            <StyledVideo src={Track3} autoPlay loop muted playsInline />
          </StyledCarouselContent>
        </StyledCarousel>
      </StyledCarouselWrapper>
    </StyledGridContainer>
  );
};

export default TwoSplitCard;
