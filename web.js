var express 	= require('express');
var fs 		= require('fs');
var app 	= express.createServer(express.logger());

app.get('/', function(request, response) {
    Buffer body_view = fs.readFile(index.html);
    response.send(body_view);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
