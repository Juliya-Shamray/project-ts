import styled from "styled-components";

export const StyledButtons = styled.div`
  button {
    margin: 20px 0;
    background-color: wheat;
    padding: 5px 10px;
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    transition: color 250ms linear, background-color 250ms linear;
    &:hover {
      background-color: black;
      color: wheat;
    }
  }
`;
