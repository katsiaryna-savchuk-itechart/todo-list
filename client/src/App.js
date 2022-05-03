import { StrictMode, useState, useEffect } from "react";
import axios from "axios";
import { Form } from "./components/form";
import { Container } from "./components/shared/container";
import { List } from "./components/list";
import { ErrorBoundary } from "./components/error-boundary";

const App = () => {
  const [list, updateList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/list")
      .then((res) => updateList(res.data))
      .catch((e) => console.error(e));
  }, []);

  const onDeleteItem = (id) => {
    axios
      .delete(`/api/list/${id}`)
      .then(() => updateList(list.filter((el) => el.id !== id)))
      .catch((e) => console.error(e));
  };

  const onAddItem = (item) => {
    axios
      .post("/api/list", item)
      .then((res) => updateList((prevList) => [...prevList, res.data]))
      .catch((e) => console.error(e));
  };

  const onClearAll = () => {
    axios
      .delete("/api/list")
      .then(() => updateList([]))
      .catch((e) => console.error(e));
  };

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
