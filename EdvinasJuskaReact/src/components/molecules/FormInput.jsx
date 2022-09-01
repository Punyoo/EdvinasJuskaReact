import { forwardRef } from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import { StyledFormInput } from "./FormInput.style";

const FormInput = (
  { name, text, type, id, value, startIcon, endIcon, change, helperText, func },
  ref
) => {
  return (
    <StyledFormInput>
      <Label name={name} text={text} />
      <Input
        type={type}
        id={id}
        startIcon={startIcon}
        endIcon={endIcon}
        ref={ref}
        onChange={func}
        change={change}
        helperText={helperText}
      />
    </StyledFormInput>
  );
};

export default forwardRef(FormInput);
