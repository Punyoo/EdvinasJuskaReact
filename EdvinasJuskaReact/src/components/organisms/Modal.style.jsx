import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  /* z-index: 1; */

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000000;
`;

export const ModalDiv = styled.div`
  /* z-index: 2; */

  display: flex;
  width: 1000px;
  border-radius: 10px;
  border: 1px solid red;
  background-color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  gap: 5px;
`;

export const StyledTitle = styled.div`
  width: 100%;
  font-size: 22px;
  padding: 10px 15px;

  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const StyledChildren = styled.div`
  width: 100%;
  padding: 15px;
  padding-bottom: 25px;
  box-sizing: border-box;
`;

export const Banner = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f4877d;
  border-radius: 10px 0 0 10px;
  padding: 25px 50px;
`;

export const Background = styled.img`
  position: relative;
  width: 100%;
  background-color: #f4877d;
`;

export const Logo = styled.img`
  position: relative;
  background-color: #f4877d;
`;

export const Text = styled.p`
  text-align: center;
  width: 50%;
  margin: auto;
  padding-top: 15px;
  color: white;
  font-weight: 400;
  font-size: 1.25em;
`;
