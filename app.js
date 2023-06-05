// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 4000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   const paylaod = {
//     data: {
//       success: true,
//       created: true
//     }
//   };
//   res.end(JSON.stringify(paylaod));
// });
// server.listen(port, hostname, () => {
//   console.log(`Server listening at http://${hostname}:${port}`);
// });
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
