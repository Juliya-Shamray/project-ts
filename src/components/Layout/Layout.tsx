import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { StyledMain } from "./Layout.styled";
import { darkTheme, lightTheme } from "./../../styles/Theme";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { Theme } from "../../styles/Theme";

export const Layout = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(
    JSON.parse(
      window.localStorage.getItem("theme") ?? JSON.stringify(lightTheme)
    ) as Theme
  );
  const toggleTheme = () => {
    const newTheme = currentTheme === lightTheme ? darkTheme : lightTheme;
    setCurrentTheme(newTheme);
  };
  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(currentTheme));
  }, [currentTheme]);

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <Header toggleTheme={toggleTheme} />
        <StyledMain>
          <div className="container">
            <Outlet />
          </div>
        </StyledMain>
      </ThemeProvider>
    </>
  );
};
