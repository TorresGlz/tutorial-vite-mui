import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
{
  /* Fuentes de Roboto */
}

import "./index.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({ /*Se crea el tema con la funcion createTheme */
  palette: {
    mode: "light",
    primary: {
      main: "#004d40",
    },
    secondary: {
      main: "#b500d6",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
    <CssBaseline />{" "}
    {/* Incluye reglas para establecer valores para propiedades como tipografias, margenes y paddings, se aplican a todo el proyecto.*/}
    <App />
    </ThemeProvider>
    
  </React.StrictMode>
);
