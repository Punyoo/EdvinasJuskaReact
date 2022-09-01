import styled from "styled-components";

export const StyledInputField = styled.input`
  width: 100%;
  border: none;
  outline: none;
  margin: ${(props) => (props.hasIcon ? "0 7px" : 0)};
  font-size: 16px;
  color: #ccc;
  padding-top: 2px;

  box-shadow: 1px 18px 50px -17px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 1px 18px 50px -17px rgba(0, 0, 0, 0.5);
`;

export const StyledInputFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  border: ${(props) =>
    props.hasHelperText ? "1px solid red" : "2px solid #ccc"};
  padding: 7px 10px;
  border-radius: 5px;

  i {
    color: #ccc;
    font-size: 14px;
  }
`;

export const StyledHelperText = styled.p`
  padding-top: 5px;
  font-size: 12px;
  color: red;
`;
