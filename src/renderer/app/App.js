import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>React App</div>
    </ThemeProvider>
  );
}
