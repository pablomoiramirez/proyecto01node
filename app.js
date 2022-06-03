const express = require('express');
const req = require('express/lib/request');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola Express!s!!!!');
});

const port = 3000;

app.listen(port , () => console.log(`http://localhost:${port}`));