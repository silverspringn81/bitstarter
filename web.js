var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
   var fs = requiqre('fs');
   var str = fs.readFileSync('indext.html');
   response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
