import { useState, useEffect } from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Whatwedo from "../components/Whatwedo";
import Campaign from "../components/Campaign";
import TwoSplit from "../components/Offers";
import WhatYouGain from "../components/WhatYouGain";
import Opacity from "../components/Opacity";
import HowItWorks from "../components/HowItWorks";
import ImageFullFrame from "../components/ImageFullFrame";
import FormatFlex from "../components/FormatFlex";
import Team from "../components/Team";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import videoBg from "../assets/bg4.mp4";

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  transition: background-image 1s ease-in-out;
  background-color: #000000;
`;

const StyledVideo = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;


const StyledHomeContainer = styled.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-content: center;
  /* padding-top: 80px; */

  @media screen and (max-width: 960px) {
    padding-top: 80px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 0px;
  }

  @media screen and (max-width: 548px) {
    padding-top: 20px;
  }
`;

const backgroundMedia = [bg1, bg2, bg3, videoBg];

const breakpoints = [0, 2000, 4000, 7000]; // Customize these scroll values to suit your layout

const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    let index = breakpoints.length - 1;
    for (let i = 0; i < breakpoints.length; i++) {
      if (scrollTop < breakpoints[i]) {
        index = i - 1;
        break;
      }
    }

    setBgIndex(Math.max(0, index));
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <>
      <BackgroundWrapper>
        {bgIndex === backgroundMedia.length - 1 ? (
          <StyledVideo autoPlay loop muted playsInline>
            <source src={videoBg} type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${backgroundMedia[bgIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "background-image 1s ease-in-out",
            }}
          />
        )}
      </BackgroundWrapper>

      <StyledHomeContainer>
        <Hero />
        <Whatwedo />
        <Campaign />
        <TwoSplit />
        <Opacity />
        <WhatYouGain />
        <Opacity />
        <HowItWorks />
        <ImageFullFrame />
        <FormatFlex />
        <Opacity />
         <Team />
          <Opacity />
      </StyledHomeContainer>
    </>
  );
};



// const Home = () => {
//   return (
//     <StyledHomeContainer>
//       <Hero />

    
//         <Whatwedo />
//         <Campaign />
//         <TwoSplit />
//         <WhatYouGain />
//         <Opacity />
//        <WhatYouGain />
//        <ImageFullFrame />
//        <WhatYouGain />
//         <Opacity />

//     </StyledHomeContainer>
//   );
// };

export default Home;
