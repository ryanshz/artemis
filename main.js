//creates browser window
const {BrowserWindow, app} = require('electron');
const path = require('path');
const isDev = (...args) => import('electron-is-dev').then(({default: isDev}) => fetch(...args));
require('./express.js');

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        useContentSize: true
    });

    //sets url for express server
    const startURL = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, './client/views/index.html')}`

    mainWindow.loadURL('http://localhost:3000/');
    mainWindow.focus();
}

//start app
app.whenReady().then(() => {
    createWindow();

    //[mac] when app closed, keep open
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
