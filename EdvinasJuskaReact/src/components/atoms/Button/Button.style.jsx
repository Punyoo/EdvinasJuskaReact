import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  border-radius: 5px;

  height: 40px;

  color: white;
  background-color: white;

  padding: 0 15px;

  font-size: 22px;

  box-shadow: 1px 18px 50px -17px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 1px 18px 50px -17px rgba(0, 0, 0, 0.5);

  &:hover {
    cursor: pointer;
    opacity: 95%;
  }
`;
