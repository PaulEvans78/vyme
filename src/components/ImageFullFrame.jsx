import styled from "styled-components";
import BlackWhiteImage from "../assets/BlackWhiteImage.png"


const StyledContentsContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  height: 828px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;





const Campaign = () => {
  return (
    <StyledContentsContainer>

      <StyledImg
        src={BlackWhiteImage}
        alt="A black & whote image of a woman sitting in an arm chair ina brutalist styled room with the ocean behind her."
      />
      
    </StyledContentsContainer>
  );
};



export default Campaign;
