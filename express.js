const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/client/views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/views/index.html'));
});

app.listen(port, () => {
    console.log(`Express server running at http://localhost:${port}`);
});
