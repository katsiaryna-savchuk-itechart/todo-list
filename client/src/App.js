import { StrictMode, useReducer } from "react";
import { Form } from "./components/form";
import { Container } from "./components/shared/container";
import { List } from "./components/list";
import { ErrorBoundary } from "./components/error-boundary";

const App = () => {
  const [list, updateList] = useReducer(
    (state, action) => [...state, ...action],
    []
  );
  return (
    <StrictMode>
      <ErrorBoundary>
        <Container>
          <Form updateList={updateList} />
          <List list={list} />
        </Container>
      </ErrorBoundary>
    </StrictMode>
  );
};

export default App;
