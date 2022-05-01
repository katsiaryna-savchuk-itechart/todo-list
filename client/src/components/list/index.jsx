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
      {list.map(({ action, date }) => (
        <Item key={action}>
          <TextWrapper>
            <ActionName>{action}</ActionName>
            <Date>{date}</Date>
          </TextWrapper>
          <span onClick={() => onDeleteItem(action)}>x</span>
        </Item>
      ))}
    </Wrapper>
    <Button version="secondary" onClick={onClear}>
      Clear
    </Button>
  </Container>
);
