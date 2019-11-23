var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/data', function (req, res) {
  console.log(new Date().getTime());
  res.json({ ok: 'ok' });
});

app.listen(3000, function () {
  console.log('http://localhost:3000');
});
