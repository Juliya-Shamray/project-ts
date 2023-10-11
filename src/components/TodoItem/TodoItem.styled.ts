import styled from "styled-components";

export const StyledLi = styled.li`
  border: 2px solid gray;
  max-width: 500px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.textColor};
    transition: color 250ms linear;
    &:first-child:hover {
      color: green;
    }
    &:last-child:hover {
      color: red;
    }
  }
`;
