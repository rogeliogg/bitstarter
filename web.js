var express = require('express');

var app = express.createServer(express.logger());

var buf = new Buffer();

app.get('/', function(request, response) {
   var index = fs.readFileSync('index.html');
   var buf = new Buffer (index);
   response.send(buf;
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
   console.log("Listening on" + port);
});

