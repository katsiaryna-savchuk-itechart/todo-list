import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding-bottom: 20px;
`;

export const StyledInput = styled.input`
  height: 48px;
  padding: 14px 16px;
  border: 1px solid #D2D2D2};
  background-color: #FFFFFF;
  width: 360px;
  text-align: left;
  font-size: 14px;
  line-height: 20px;
  box-shadow: none;
  outline: none;
  box-sizing: border-box;
  border-radius: 5px;

  &::placeholder {
    color: #D2D2D2;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #F4F5F9;
  }

  ${({ error }) =>
    error &&
    `color: #D0352F;
     border-color: #D0352F;`};
`;

export const Error = styled.p`
  position: absolute;
  left: 0;
  color: #d0352f;
  width: 100%;
  margin-top: 6px;
  font-size: 12px;
  text-align: left;
`;
