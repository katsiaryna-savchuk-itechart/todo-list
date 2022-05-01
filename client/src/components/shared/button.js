import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 40px;
  outline: none;
  font-weight: 600;
  cursor: pointer;
  height: 45px;
  margin: 6px;
  transition: all 0.3s ease-in-out;
  color: #fff;
  outline: none;
  border-radius: 3px;
  border: none;
  background-color: ${({ version }) =>
    version === "primary" ? "rgb(189, 93, 112)" : "rgb(50, 93, 209)"};
`;
