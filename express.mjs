import path from 'path';
import express from 'express';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import firebaseConfig from './api-config.mjs';

//routes
import router from './src/router.mjs'

//base setup
const app = express();
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

const port = 3000;
const hostname = 'localhost';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const server = app.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${server.address().port}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`port ${port} is in use, retrying on another port...`);
        app.listen(0, hostname, () => {
            console.log(`server running at http://${hostname}:${server.address().port}`);
        });
    } else {
        throw err;
    }
});

app.use(express.static(path.join(__dirname, '/src/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/index.html'));
});

app.get('/createuser', router);