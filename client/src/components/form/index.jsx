import { Input } from "../shared/input";
import { Button } from "../shared/button";
import { Wrapper, StyledForm } from "./styles";

export const Form = () => (
  <Wrapper>
    <StyledForm>
      <Input />
      <Input type="date" />
      <Button version="primary">Add</Button>
    </StyledForm>
  </Wrapper>
);
