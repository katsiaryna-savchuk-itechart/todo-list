import { Button } from "../shared/button";
import {
  Container,
  Item,
  TextWrapper,
  ActionName,
  Date,
  Wrapper,
} from "./styles";

export const List = ({ list, onDeleteItem, onClear }) => (
  <Container>
    <Wrapper>
      {list.length && list.map(({ action, date, id }) => (
        <Item key={id}>
          <TextWrapper>
            <ActionName>{action}</ActionName>
            <Date>{date}</Date>
          </TextWrapper>
          <span onClick={() => onDeleteItem(id)}>x</span>
        </Item>
      ))}
    </Wrapper>
    <Button version="secondary" onClick={onClear}>
      Clear
    </Button>
  </Container>
);
