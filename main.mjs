import { BrowserWindow, app } from 'electron';
import path from 'path';
import isDev from 'electron-is-dev';
import waitOn from 'wait-on';

//express import
import './express.mjs';


let mainWindow;

const createWindow = async () => {
    await waitOn({ resources: ['http://localhost:3000'], timeout: 10000 });

    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        useContentSize: true,
    });

    //sets url for express server
    const startURL = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(path.dirname(new URL(import.meta.url).pathname), './src/views/index.html')}`

    mainWindow.loadURL(startURL);
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
