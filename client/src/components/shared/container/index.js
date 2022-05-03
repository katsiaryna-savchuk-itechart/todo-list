import styled from "styled-components";
import background from "./background.jpeg";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  text-align: center;
  background-image: url(${background});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;
