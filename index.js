const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!<h1>');
});

app.get('/tin-tuc', (req, res) => {
    res.send('<h1>Tin Tức<h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});