const express = require('express'),
  path = require('path'),
  app = express()

app.use(express.static(path.resolve('my-website')));
app.get('/', function(req, res) {
  res.sendfile(path.resolve('my-website', 'index.html'));
});

app.listen(8080);
console.log("Your website has started, access it at http://localhost:8080/");
console.log("Close this window to stop the website.");
