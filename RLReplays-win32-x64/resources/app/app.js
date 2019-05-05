const electron = require("electron");
const {BrowserWindow} = electron;
const {app} = electron;

app.on("ready", () => {
    let win = new BrowserWindow({
        width: 1380,
        height: 900,
        webPreferences: {
            nodeIntegration: true
        },
        icon: __dirname + "/rlreplays.ico"
    })
    win.loadURL("file://"+__dirname+"/index.html")
    win.maximize()
    win.show()
})