import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 15px;
`;

export const Wrapper = styled.ul`
  list-style-type: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  background-color: #ffffff;
  padding: 0 8px;
  max-width: 320px;
  margin: 0 auto;

  span:hover {
    cursor: pointer;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid #d2d2d2;
  }
`;

export const TextWrapper = styled.div`
  max-width: 320px;
  text-align: start;
`;

export const ActionName = styled.p`
  font-size: 16px;
  margin: 10px 0 0;
  padding: 0;
`;

export const Date = styled.p`
  font-size: 12px;
  font-style: italic;
`;
