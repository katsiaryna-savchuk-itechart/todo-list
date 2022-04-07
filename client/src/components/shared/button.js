import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 40px;
  outline: none;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease-in-out;
  color: #fff;
  outline: none;
  border-radius: 3px;

  ${({ version }) =>
    version === "primary"
      ? `background-color: rgb(50, 93, 209);
         border-color: rgb(50, 93, 209);`
      : ""}
`;
