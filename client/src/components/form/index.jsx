import { useForm } from "react-hook-form";
import { Input } from "../shared/input";
import { Button } from "../shared/button";
import { Container, StyledForm, Title } from "./styles";

export const Form = ({ onSubmit }) => {
  const methods = useForm();

  const handleSubmit = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <Container>
      <Title>Create Note</Title>
      <StyledForm onSubmit={methods.handleSubmit(handleSubmit)}>
        <Input
          placeholder="I have to ..."
          name="action"
          errors={methods.errors}
          register={methods.register}
          rules={{ required: true }}
        />
        <Input
          type="date"
          name="date"
          errors={methods.errors}
          register={methods.register}
          rules={{ required: true }}
        />
        <Button version="primary" type="submit">
          Add
        </Button>
      </StyledForm>
    </Container>
  );
};
