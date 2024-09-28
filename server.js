const express = require('express');
const app = express();
const http = require('http').createServer(app);
const tuio = require('tuio');

const port = 5000;

app.use(express.static('public'));

http.listen(port, () => {
  console.log(`TUIO server listening at http://localhost:${port}`);
});

const tuioServer = new tuio.Server({
  httpServer: http
});

console.log('TUIO server started');