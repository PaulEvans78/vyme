import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Track1 from "../assets/track1.jpg";
import Track2 from "../assets/track2.jpg";
import Track3 from "../assets/track3.mp4";
import Flat from "../assets/track_flat.png";
// import Hair from "../assets/Hair.mp4";
import styled from "styled-components";


const StyledGridContainer = styled.div`
  position: relative;
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  grid-template-areas: "wrapper carousel";
  width: 100%;
  /* min-height: 300px; */
height: 828px;
  background-color: #000000a9;
`;

const StyledWrapper = styled.div`
grid-area: wrapper;
  display: flex;
  width: 100%;
  /* max-width: 100%; */
  /* min-height: 300px; */
  /* height: 100%; */
  overflow: hidden;
`;

const StyledCarouselWrapper = styled.div`
grid-area: carousel;
position: relative;
top:0;
  width: 100%;
  max-width: 100%;
  /* aspect-ratio: 3 / 4; */
  /* margin: 0 auto; */
  /* background-color: #000; */
  /* padding: 2em 0; */
  /* display: flex;
  width: 100%;
  max-width: 100%;
  min-height: 300px;*/
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
`;

const StyledTitle = styled.div`
  position: absolute;
  top: 0;
  margin-top: 4em;
  margin-left: 7em;
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
  /* aspect-ratio: 3 / 4; */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative;
  aspect-ratio: 3/2;
  width: 100%;
  max-width: 100%;
  min-height: 300px;
  overflow: hidden; */
`;

const StyledFirstItem = styled.div`
  width: 100%; // or whatever size you want
  padding: 6em;

  /* margin: 0 auto;  */
  /* aspect-ratio: 3 / 2; */
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
    /* aspect-ratio: 3 / 2; */

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
  /* aspect-ratio: 3 / 2; */
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
            <h2>How it <span>Works</span></h2>
          </StyledTitle>
          <StyledCopy>

            <StyledCopyWrapper>

            <ul>
              <li>Lower visual production costs</li>
              <li>Faster time to market</li>
              <li>Higher conversion rates through relevant, personalised visuals</li>
              <li>Improved ad performance with precisely targeted imagery</li>
            </ul>
            </StyledCopyWrapper>
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
       {/* <StyledWrapper>
        <StyledVideo src={Track3} autoPlay loop muted playsInline />
        </StyledWrapper> */}
      </StyledCarouselWrapper>
    </StyledGridContainer>
  );
};

export default TwoSplitCard;
