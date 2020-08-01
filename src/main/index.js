import { app, BrowserWindow } from "electron";
import path from "path";
import url from "url";

const isDevelopment = process.env.NODE_ENV !== "production";

// Global reference to mainWindow (to prevent window from being garbage collected).
let mainWindow;

function createMainWindow() {
  const window = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (isDevelopment) {
    window.webContents.openDevTools();
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
  } else {
    window.loadURL(
      url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: true,
      })
    );
  }

  window.on("closed", () => {
    mainWindow = null;
  });

  return window;
}

app.on("window-all-closed", () => {
  app.quit();
});

app.on("ready", () => {
  mainWindow = createMainWindow();
});
