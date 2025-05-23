import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HS1 from "../assets/HS1.jpg";
import HS2 from "../assets/HS2.jpg";
import HS3 from "../assets/HS3.jpg";
import HS4 from "../assets/HS4.jpg";
import SoMe from "../assets/SoMe_HighRes.png";
import styled from "styled-components";

const StyledGridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "carousel wrapper";
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
  position: absolute;
  bottom: 0;
  /* left: 0; */
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  z-index: 2;
 background: linear-gradient(to bottom, rgba(10, 10, 10, 0) 0%, rgba(10, 10, 10, 0.6) 150%);

  `;

  const StyledTitle = styled.div`
  margin: 0;
`;

const StyledCopy = styled.div`
position: relative;
  max-width: 90%;
`;


const StyledCarouselContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
   padding: 4em;
`;


const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;


   @media screen and (min-width: 1440px) {
    object-fit: contain;
  }
`;

const StyledSoMeImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
      

      <StyledCarouselWrapper>
        <StyledCarousel responsive={responsive} infinite autoPlay arrows>
          {/* <StyledFirstItem> */}
            <StyledCarouselContent>
              <StyledImg src={HS1} alt="A man in a blue dune jacket and brown shorts against a white studio." />
            </StyledCarouselContent>
          {/* </StyledFirstItem> */}

          <StyledCarouselContent>
            <StyledImg src={HS2} alt="A man in a blue dune jacket and brown shorts against a white studio." />
          </StyledCarouselContent>

          <StyledCarouselContent>
            <StyledImg src={HS3} alt="A man in a blue dune jacket and brown shorts against a white studio." />
          </StyledCarouselContent>

          <StyledCarouselContent>
            <StyledImg src={HS4} alt="A man in a blue dune jacket and brown shorts against a white studio." />
          </StyledCarouselContent>
        </StyledCarousel>

        <StyledContents>

<StyledTitle className="offers">
          Studio
        </StyledTitle>
        <StyledCopy>
          <p>
            Let your customers feel the fit. 
            With AI-powered imagery your products come to life, driving confidence and reducing returns.
          </p>
        </StyledCopy>
        </StyledContents>
      </StyledCarouselWrapper>

       <StyledWrapper>
                  <StyledSoMeImg
                    src={SoMe}
                    alt="a young woman in a red balloon skirt and a green and white rugby shirt crossing a road carrying flowers.."
                  />
      
      <StyledContents>
                  <StyledTitle className="offers">
                SoMe
              </StyledTitle>
              <StyledCopy>
                <p>
                  Our technology lets you showcase a diverse range of models and looks. 
                  Expand your reach, reflect your audience and convert more.
                </p>
              </StyledCopy>
              </StyledContents>
      
            
            
              </StyledWrapper>
    </StyledGridContainer>
  );
};

export default TwoSplitCard;
