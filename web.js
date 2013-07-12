var express 	= require('express');
var fs 		= require('fs');
var app = express();

app.get('/', function(request, response) {
    var body_view = fs.readFileSync('./index.html', 'ascii' ,function(err, data) {
	if (err) throw err;
	console.log(data);
    });
    response.send(body_view);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
