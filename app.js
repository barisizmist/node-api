const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
