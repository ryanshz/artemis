const path = require('path');
const express = require('express');
const firebaseConfig = require('./apikeys-donotpush.js');

//routes

//base setup
const app = express();
const port = 3000;
const hostname = 'localhost';

const artemisfb = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

app.listen(hostname, port, () => {
    console.log(` server running at http://${hostname}:${port}`);
});

app.use(express.static(path.join(__dirname, '/client/views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/views/index.html'));
});


