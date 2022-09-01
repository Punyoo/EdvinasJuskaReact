import React, { useRef } from "react";
import Button from "../atoms/Button/Button";
import ReactDom from "react-dom";

import {
  ModalWrapper,
  ModalDiv,
  StyledChildren,
  Banner,
  Logo,
  Background,
  Text,
} from "./Modal.style";
const image = require("./images/background.png");
const logo = require("./images/logo.png");

const Modal = ({
  open,
  title,
  children,
  onClose,
  overlay,
  buttonText1,
  buttonText2,
}) => {
  const modalDiv = useRef();

  if (!open) return null;
  else {
    document.addEventListener("click", (e) => {
      if (e.target.className == "sc-gsnTZi jRRECa") {
        onClose();
      }
    });
    const overlayOpacity = {
      backgroundColor: `rgba(0, 0, 0, ${overlay})`,
    };

    return ReactDom.createPortal(
      <ModalWrapper style={overlayOpacity}>
        <ModalDiv ref={modalDiv}>
          <Banner>
            <Logo src={logo} alt="" />
            <Background src={image} alt="" />
            <Text>{"Start for free & Get Attractive offers Today !"}</Text>
          </Banner>
          <StyledChildren>{children}</StyledChildren>
        </ModalDiv>
      </ModalWrapper>,
      document.getElementById("portal")
    );
  }
};

export default Modal;
