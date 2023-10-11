import { StyledBtnTheme, StyledHeader, StyledLink } from "./Header.styled";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "styled-components";
interface HeaderProps {
  toggleTheme: () => void;
}

export const Header = ({ toggleTheme }: HeaderProps) => {
  const theme = useTheme();

  return (
    <StyledHeader>
      <div className="container">
        <nav>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/todos">Todos</StyledLink>
            </li>
          </ul>
        </nav>

        <StyledBtnTheme onClick={toggleTheme}>
          {theme.primaryColor === "#edaecc" ? (
            <DarkModeIcon />
          ) : (
            <LightModeIcon style={{ color: "white" }} />
          )}
        </StyledBtnTheme>
      </div>
    </StyledHeader>
  );
};
