var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.resolve('my-website')));
app.get('/', function(req, res) {
  res.sendfile(path.resolve('my-website', 'index.html'));
});

app.listen(8080);
console.log("Your website has started, access it at http://localhost:8080/");
console.log("Close this window to stop the website.");
