import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { Button, StyledWrapper } from "./Styles";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1200) {
      setVisible(true);
    } else if (scrolled <= 1200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <StyledWrapper>
      <FaChevronUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none",
          borderRadius: "50%"
         }}
      />
      </StyledWrapper>
    </Button>
  );
};

export default ScrollButton;
