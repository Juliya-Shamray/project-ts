import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.primaryColor};
  ul {
    display: flex;
    gap: 15px;
    list-style: none;
  }
  li {
    padding: 20px 0;
  }
  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  color: #b41ce8;
  transition: box-shadow 250ms linear;
  &.active {
    color: darkviolet;
  }
  &:hover {
    box-shadow: 0px 3px 0 #b41ce8;
  }
`;

export const StyledBtnTheme = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
