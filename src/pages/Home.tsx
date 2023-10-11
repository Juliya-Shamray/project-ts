import styled from "styled-components";

export const StyledCapture = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  color: ${(props) => props.theme.textColor};
`;

export const Home = () => {
  return <StyledCapture>Welcome to my App!!!</StyledCapture>;
};
