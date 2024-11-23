const path = require('path');
const express = require('express');
const { initializeApp } = require('firebase/app');
const firebaseConfig = require('./apikeys-donotpush');

//routes

//base setup
const app = express();
const firebase = initializeApp(firebaseConfig);

const port = 3000;
const hostname = 'localhost';

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

app.use(express.static(path.join(__dirname, '/client/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/views/index.html'));
});
