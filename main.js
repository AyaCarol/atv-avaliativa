const { app, BrowserWindow } = require("ts-node").register();

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('web-build/index.html'); 
}

app.whenReady().then(createWindow);