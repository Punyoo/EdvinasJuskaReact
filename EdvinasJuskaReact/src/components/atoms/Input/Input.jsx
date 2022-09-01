import PropTypes from "prop-types";
import { forwardRef } from "react";
import {
  StyledInputField,
  StyledInputFieldWrapper,
  StyledHelperText,
} from "./Input.style";

const Input = (props, ref) => {
  return (
    <div>
      <StyledInputFieldWrapper hasHelperText={!!props.helperText}>
        {props.startIcon}
        <StyledInputField
          ref={ref}
          value={props.value}
          hasIcon={!!props.startIcon}
          change={(e) => props.change(e.target.value)}
          onChange={""}
          {...props}
        />
        {props.endIcon}
      </StyledInputFieldWrapper>
      {props.helperText && (
        <div>
          <StyledHelperText>{props.helperText}</StyledHelperText>
        </div>
      )}
    </div>
  );
};

export default forwardRef(Input);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
