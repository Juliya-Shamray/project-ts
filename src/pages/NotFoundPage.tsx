import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: green;
  margin: 0 8px;
`;

const StyledCapture = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;
export const NotFoundPage = () => {
  return (
    <StyledCapture>
      Sorry...Page not found. Back to <StyledLink to="/">Home </StyledLink>page
    </StyledCapture>
  );
};
