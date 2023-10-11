import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 8px 10px;
  margin-bottom: 20px;
  border: 3px solid lightgreen;
  &:hover,
  &:focus {
    outline-color: lightblue;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  .MuiButton-root {
    color: lightgreen;
    border-color: green;
    &:hover {
      color: blue;
    }
  }
`;

export const Back = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: ${(props) => props.theme.textColor};
  }
  & div {
    background-color: ${(props) => props.theme.backgroundColor};
    padding: 20px;
  }
`;
