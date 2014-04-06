// Start sails and pass it command line arguments
/*require('sails').lift(require('optimist').argv);
*/
// web.js
var express = require("express");
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World! 5925f8c6');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
