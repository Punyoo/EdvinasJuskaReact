import React, { useState, useRef } from "react";
import Button from "../atoms/Button/Button";
import FormInput from "../molecules/FormInput";
import { StyledForm, H2, P, Login, SocialMedia, Or } from "./Form.style";

const Form = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [formValidations, setFormValidations] = useState({
    username: "",
    email: "",
  });

  const nameInputRef = useRef();
  const usernameInputRef = useRef();
  const emailInputRef = useRef();

  const isInitialSubmit = useRef(true);

  const handleNameChange = () => {
    const input = nameInputRef.current;

    console.log(input);
  };

  const handleUserameChange = () => {
    const input = usernameInputRef.current.value;

    if (!isInitialSubmit.current) {
      if (input.length < 6) {
        setFormValidations({
          ...formValidations,
          username: "Username must be 6 or more character length",
        });
      } else {
        setFormValidations({
          ...formValidations,
          username: "",
        });
      }
    } else {
      setUsername(input);
    }
  };
  const handleEmailChange = () => {
    const input = emailInputRef.current.value;

    if (!isInitialSubmit.current) {
      if (!input.includes("@")) {
        setFormValidations({
          ...formValidations,
          email: "Email must be valid email",
        });
      } else {
        setFormValidations({
          ...formValidations,
          email: "",
        });
      }
    } else {
      setEmail(input);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    isInitialSubmit.current = false;
    console.log({ name, username, email });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <H2>Get Started</H2>
      <P>Already have an account?</P>
      <Login>Log In</Login>
      <SocialMedia>
        <Button
          text={"Sign up"}
          outline={"true"}
          type="submit"
          color="black"
        ></Button>
        <Button
          text={"Sign up"}
          logo={<i class="fa-brands fa-facebook"></i>}
          bgColor={"#4267B2"}
          color="white"
        ></Button>
      </SocialMedia>
      <Or>Or</Or>
      <FormInput
        name="name"
        text="Name"
        type="text"
        id="name"
        startIcon={<i className="fa-solid fa-user"></i>}
        endIcon={<i className="fa-solid fa-check"></i>}
        value={name}
        onChange={handleNameChange}
        ref={nameInputRef}
      />
      <FormInput
        name="email"
        text="Email"
        type="email"
        id="email"
        value={username}
        startIcon={<i className="fa-solid fa-envelope"></i>}
        endIcon={<i className="fa-solid fa-check"></i>}
        change={setUsername}
        ref={usernameInputRef}
        helperText={formValidations.username}
      />
      <FormInput
        name="password"
        text="Password"
        type="password"
        id="password"
        value={email}
        startIcon={<i class="fa-solid fa-key"></i>}
        endIcon={<i className="fa-solid fa-check"></i>}
        change={setEmail}
        ref={emailInputRef}
        helperText={formValidations.email}
      />
      <Button text="Submit" type="submit" bgColor={"#f4877d"} />
    </StyledForm>
  );
};

export default Form;
