import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./theme";

export default function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div>React App</div>
      </ThemeProvider>
    </>
  );
}
