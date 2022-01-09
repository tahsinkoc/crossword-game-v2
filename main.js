const { app, BrowserWindow, ipcMain } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        minWidth: 1200,
        minHeight: 700,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        autoHideMenuBar: true
    })
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})
ipcMain.on('catch', (err, data) => {
    console.log('work')
})