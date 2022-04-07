import { Wrapper, StyledInput, Error } from "./styles";

export const Input = ({
  errors,
  register,
  name = "",
  textarea,
  label,
  validating,
  className,
  maxLength,
  initialValue,
  onChange,
  ...props
}) => (
  <Wrapper className={className}>
    <StyledInput ref={register} name={name} {...props} />
    {errors && errors[name] && (
      <Error data-testid="input-error-message">{errors[name].message}</Error>
    )}
  </Wrapper>
);
