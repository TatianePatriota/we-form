import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "../Themes";
import { RouterProvider } from "react-router-dom";
import { router } from "../router.tsx";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
      box-sizing: border-box;
    }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
