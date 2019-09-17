const { BrowserWindow } = require('electron')
const { app, ipcMain } = require('electron')
let path = require('path')

// mainWindow createWindow fn
createWindow = () => {
    win = new BrowserWindow({
        width: 600,
        height: 400,
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // Devtools

    // this.win.webContents.openDevTools()

    // Load main window content
    win.loadFile('./index.html')

    win.on('ready-to-show', () => {
        win.show()
    })
    //Handle window closed
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if (mainWindow === null) createWindow()
})