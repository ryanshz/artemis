//creates browser window
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 720
    });
    mainWindow.loadFile('index.html');
}

//[mac] when app closed, keep open
app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }
    });
})

//[linux + windows] when app closed, close app
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});
