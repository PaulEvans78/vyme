import PlusSize from "../assets/Studio_HighRes.png";
import SoMe from "../assets/SoMe_HighRes.png";
import styled from "styled-components";


const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 800px;
`;

const StyledWrapper = styled.div`
position: relative;
  display: flex;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
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

  `;

  const StyledTitle = styled.div`
  margin: 0;
`;

const StyledCopy = styled.div`
position: relative;
  max-width: 90%;
  
`;





const TwoSplitCard = () => {

  return (

      <StyledGridContainer>
        <StyledWrapper>
            <StyledImg
              src={PlusSize}
              alt="A Plus size model wearing a short black dress in a white studio."
            />
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
      
          
        </StyledWrapper>

        <StyledWrapper>
            <StyledImg
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

            {/* <StyledOpacity>
              <StyledCaseContents>
                <Styledp>Ansiktet - Fyra Våningar Upp</Styledp>
              </StyledCaseContents>
            </StyledOpacity> */}
      
        </StyledWrapper>
      </StyledGridContainer>

    
  );
};

export default TwoSplitCard;
