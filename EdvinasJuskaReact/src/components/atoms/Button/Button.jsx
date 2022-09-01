import React from "react";
import { StyledButton } from "./Button.style";

const Button = ({ text, bgColor, func, color, logo, outline = false }) => {
  let buttonStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };

  if (outline) {
    buttonStyle = {
      border: "2px solid #ccc",
    };
  }

  return (
    <StyledButton style={buttonStyle} onClick={func}>
      <div>{logo}</div>
      {text}
    </StyledButton>
  );
};

export default Button;
