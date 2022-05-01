import { StrictMode, useState } from "react";
import { Form } from "./components/form";
import { Container } from "./components/shared/container";
import { List } from "./components/list";
import { ErrorBoundary } from "./components/error-boundary";

const App = () => {
  const [list, updateList] = useState([]);

  const onDeleteItem = (action) =>
    updateList(list.filter((el) => el.action !== action));

  const onAddItem = (item) => updateList((prevList) => [...prevList, item]);

  const onClearAll = () => updateList([]);

  return (
    <StrictMode>
      <ErrorBoundary>
        <Container>
          <Form onSubmit={onAddItem} />
          <List list={list} onDeleteItem={onDeleteItem} onClear={onClearAll} />
        </Container>
      </ErrorBoundary>
    </StrictMode>
  );
};

export default App;
