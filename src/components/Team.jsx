// import styled from "styled-components";
// import Peter from "../assets/Peter.avif"
// import Philip from "../assets/Philip.avif"
// import Paul from "../assets/Paul.avif"
// import Ulrika from "../assets/Ulrika.avif"



// const StyledContentsContainer = styled.section`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   width: 100%;
//   padding-top: 4em;
//   padding-bottom: 4em;
//   background-color: var(--background-color-black);
// `;

// const StyledContents = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   width: 80%;
// `;

// const StyledteamContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   width: 100%;
//   padding-top: 4em;
// `;

// const StyledthumbContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
// `;

// const StyledImgContainer = styled.div`
//   flex-shrink: 0;
//   flex-grow: 0;
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   @media (max-width: 960px) {
//     width: 100px;
//   height: 100px;
//   }

//   @media (max-width: 767px) {
 
//   }
// `;

// const StyledImg = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 50%;
//   object-fit: cover;
// `;

// const StyledTeamCopy = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding-top: 1em;
// `;




// const Campaign = () => {
//   return (
//     <StyledContentsContainer id="team-section">

//       <StyledContents>

//       <h3>The Team</h3>

//       <p>We bring a unique mix of strategy, creativity, and innovation essential for an AI fashion service. 
//         Peter Ekman, a former lawyer turned executive producer, brings precision and creative leadership from years of producing commercials globally. 
//         Philip Cederman combines fashion and tech expertise from H&M Group, with experience in high-volume imaging, DAM, SoMe, and Beauty, making him a seasoned project and tech lead. 
//         Ulrika Evans brings two decades of driving digital growth for leading fashion brands and agencies, thriving where innovation meets efficiency. 
//         Paul Evans delivers visual storytelling with emotional depth, shaped by over two decades as a photographer and cinematographer. Together, they bridge vision and execution, key to building next-gen AI fashion experiences.</p>

// <StyledteamContainer>
//   <StyledthumbContainer>
// <StyledImgContainer>
//   <StyledImg
//         src={Peter}
//         alt="Peter Ekman against a black background."
//       />
  
// </StyledImgContainer>
// <StyledTeamCopy>
//   <p className="p_bold">
//     Peter Ekman
//   </p>
//   <p className="p_small">
// Executive Producer  
// </p>
// </StyledTeamCopy>
//   </StyledthumbContainer>
 
//   <StyledthumbContainer>
// <StyledImgContainer>
//   <StyledImg
//         src={Philip}
//         alt="Philip Cederman against a black background."
//       />
  
// </StyledImgContainer>
// <StyledTeamCopy>
//   <p className="p_bold">
//     Philip Cederman
//   </p>
//   <p className="p_small">
// Head of AI & Tech  
// </p>
// </StyledTeamCopy>
//   </StyledthumbContainer>
//   <StyledthumbContainer>
// <StyledImgContainer>
//   <StyledImg
//         src={Paul}
//         alt="Paul Evans against a black background."
//       />
  
// </StyledImgContainer>
// <StyledTeamCopy>
//   <p className="p_bold">
//     Paul Evans
//   </p>
//   <p className="p_small">
// Creative Director  
// </p>
// </StyledTeamCopy>
//   </StyledthumbContainer>
//    <StyledthumbContainer>
// <StyledImgContainer>
//   <StyledImg
//         src={Ulrika}
//         alt="Ulrika Evans against a black background."
//       />
  
// </StyledImgContainer>
// <StyledTeamCopy>
//   <p className="p_bold">
//     Ulrika Evans
//   </p>
//   <p className="p_small">
// Fashion-Tech Advisor
// </p>
// </StyledTeamCopy>
//   </StyledthumbContainer>
// </StyledteamContainer>
    
      
//       </StyledContents>
//     </StyledContentsContainer>
//   );
// };



// export default Campaign;

import styled from "styled-components";
import Peter from "../assets/Peter.avif";
import Philip from "../assets/Philip.avif";
import Paul from "../assets/Paul.avif";
import Ulrika from "../assets/Ulrika.avif";

const StyledContentsContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-top: 4em;
  padding-bottom: 4em;
  background-color: var(--background-color-black);
`;

const StyledContents = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%;
`;

const StyledteamContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-top: 4em;

  @media (max-width: 767px) {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
  }

  @media (max-width: 767px)::-webkit-scrollbar {
    display: none;
  }
`;

const StyledthumbContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;

  @media (max-width: 767px) {
    flex: 0 0 60%;
    scroll-snap-align: center;
    padding: 1em 1em;
    padding-left: 4em;
  }

  @media (max-width: 400px) {
     flex: 0 0 70%;
 padding-left: 2em;
  }
`;

const StyledImgContainer = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 767px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 580px) {
    width: 200px;
    height: 200px;
  }

   @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 400px) {
    width: 150px;
    height: 150px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const StyledTeamCopy = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1em;
`;

const Campaign = () => {
  return (
    <StyledContentsContainer id="team-section">
      <StyledContents>
        <h3>The Team</h3>

        <p>
          We bring a unique mix of strategy, creativity, and innovation essential for an AI fashion service.
          Peter Ekman, a former lawyer turned executive producer, brings precision and creative leadership from years of producing commercials globally.
          Philip Cederman combines fashion and tech expertise from H&M Group, with experience in high-volume imaging, DAM, SoMe, and Beauty, making him a seasoned project and tech lead.
          Ulrika Evans brings two decades of driving digital growth for leading fashion brands and agencies, thriving where innovation meets efficiency.
          Paul Evans delivers visual storytelling with emotional depth, shaped by over two decades as a photographer and cinematographer. Together, they bridge vision and execution, key to building next-gen AI fashion experiences.
        </p>

        <StyledteamContainer>
          <StyledthumbContainer>
            <StyledImgContainer>
              <StyledImg src={Peter} alt="Peter Ekman against a black background." />
            </StyledImgContainer>
            <StyledTeamCopy>
              <p className="p_bold">Peter Ekman</p>
              <p className="p_small">Executive Producer</p>
            </StyledTeamCopy>
          </StyledthumbContainer>

          <StyledthumbContainer>
            <StyledImgContainer>
              <StyledImg src={Philip} alt="Philip Cederman against a black background." />
            </StyledImgContainer>
            <StyledTeamCopy>
              <p className="p_bold">Philip Cederman</p>
              <p className="p_small">Head of AI & Tech</p>
            </StyledTeamCopy>
          </StyledthumbContainer>

          <StyledthumbContainer>
            <StyledImgContainer>
              <StyledImg src={Paul} alt="Paul Evans against a black background." />
            </StyledImgContainer>
            <StyledTeamCopy>
              <p className="p_bold">Paul Evans</p>
              <p className="p_small">Creative Director</p>
            </StyledTeamCopy>
          </StyledthumbContainer>

          <StyledthumbContainer>
            <StyledImgContainer>
              <StyledImg src={Ulrika} alt="Ulrika Evans against a black background." />
            </StyledImgContainer>
            <StyledTeamCopy>
              <p className="p_bold">Ulrika Evans</p>
              <p className="p_small">Fashion-Tech Advisor</p>
            </StyledTeamCopy>
          </StyledthumbContainer>
        </StyledteamContainer>
      </StyledContents>
    </StyledContentsContainer>
  );
};

export default Campaign;
