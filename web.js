var express = require('express');

var app = express.createServer(express.logger());

var buf = new Buffer();

app.get('/index.html', function(request, response) {
   var index = fs.readFileSync('index.html', 'utf-8');
   //var buffer = new Buffer (index);
   response.send(index;
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
   console.log("Listening on" + port);
});

