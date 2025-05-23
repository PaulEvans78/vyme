import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Track1 from "../assets/flex1.jpg";
import Track2 from "../assets/flex2.jpg";
import Track3 from "../assets/flex3.mp4";
import styled from "styled-components";


const StyledGridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "wrapper carousel";
  width: 100%;
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
  height: 800px; 
  overflow: hidden;
`;

const StyledCarouselWrapper = styled.div`
grid-area: carousel;
position: relative;
top:0;
  width: 100%;
  max-width: 100%;
  overflow: hidden; 
`;

const StyledContents = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  z-index: 2;

    @media (max-width: 767px) {
    padding: 0.5em;
  }
`;

const StyledTitle = styled.div`
  position: absolute;
  top: 0;
  margin-top: 6em;
  margin-left: 2em;
  h2 span {
    color: #E8BC8D; 
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
  margin-bottom: 2em;
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
            <h2>Format <span>Flex</span></h2>
          </StyledTitle>
          <StyledCopy>

            <StyledCopyWrapper>

            <p>
              We offer full format flexibility. We generate images and videos in the size and type you need, 
              whether it's for social media, campaigns, or product pages. The model can be placed in an environment and pose tailored to the format, 
              ensuring every image fits perfectly and communicates effectively across all platforms.

            </p>
            </StyledCopyWrapper>
          </StyledCopy>
        </StyledContents>
      </StyledWrapper>

      <StyledCarouselWrapper>
        <StyledCarousel responsive={responsive} infinite autoPlay arrows>
  

   
      <StyledCarouselContent>
        <StyledImg src={Track1} alt="A young girl sits on her skateboard in a blue and white striped jump suit" />
      </StyledCarouselContent>
   
    
      <StyledCarouselContent>
        <StyledImg src={Track2} alt="A young girl stands on her skateboard in a blue and white striped jump suit" />
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
