import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1em 2em;

  button {
    margin-top: 15px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
`;

export const H2 = styled.h2`
  font-size: 36px;
  font-weight: 500;
  margin: 0px;
  margin-top: 25px;
`;
export const P = styled.p`
  margin: 0px;
`;
export const Login = styled.p`
  position: relative;
  bottom: 5px;
  margin: 0px;
  color: #f4877d;
`;

export const SocialMedia = styled.div`
  display: flex;
  width: 100%;
  gap: 25px;

  button {
    width: 50%;
  }
`;

export const Or = styled.p`
  font-size: 30px;
  font-weight: 100;
  margin: 0;
  margin-top: 15px;
  text-align: center;
`;
