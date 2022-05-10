const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1150,
    height: 650,
    minWidth: 640,
    minHeight: 480,
    titleBarStyle: "hiddenInset",
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: true,
    },
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../dist/bundle.js")}`
  );

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }

  mainWindow.setResizable(true);
  mainWindow.on("closed", () => (mainWindow = null));
  mainWindow.focus();
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
