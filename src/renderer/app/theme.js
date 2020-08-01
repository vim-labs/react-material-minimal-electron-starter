import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

export default createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    type: "dark" /* Dark-mode defaults */,
  },
  typography: {
    /* Default to system fonts. Fallback to Roboto typeface. */
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto"],
  },
});
