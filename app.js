var express = require('express'),
    fs      = require('fs'),
    app     = express()
;

app.get('/', function(req, res) {
  res.type('html');
  res.send(fs.readFileSync(__dirname + '/index.html'));
});
app.get('/bundle.js', function(req, res) {
  res.type('javascript');
  res.send(fs.readFileSync(__dirname + '/bundle.js'));
});

app.listen(3000);
